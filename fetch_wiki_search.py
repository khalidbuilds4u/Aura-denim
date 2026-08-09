import urllib.request
import json
import ssl
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def search_commons(query, limit=10):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&srlimit={limit}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
        return [item['title'] for item in data['query']['search']]
    except Exception as e:
        print(f"Error searching {query}: {e}")
        return []

def get_image_url(title):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&titles={urllib.parse.quote(title)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
        pages = data['query']['pages']
        for page_id in pages:
            if 'imageinfo' in pages[page_id]:
                return pages[page_id]['imageinfo'][0]['url']
    except Exception as e:
        pass
    return None

def download_image(url, filename):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        img_data = urllib.request.urlopen(req, context=ctx).read()
        with open(f"public/images/{filename}", "wb") as f:
            f.write(img_data)
        print(f"Downloaded {filename}")
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

queries = {
    "person wearing denim jacket": "person_denim_jacket.jpg",
    "person wearing denim skirt": "person_denim_skirt.jpg",
    "person wearing blue jeans": "person_jeans.jpg",
    "person wearing denim shirt": "person_denim_shirt.jpg",
    "person wearing denim overalls": "person_overalls.jpg",
    "person wearing denim dress": "person_denim_dress.jpg"
}

for q, f in queries.items():
    titles = search_commons(q, 5)
    success = False
    for t in titles:
        url = get_image_url(t)
        if url and url.lower().endswith(('.jpg', '.jpeg', '.png')):
            if download_image(url, f):
                success = True
                break
    if not success:
        print(f"Could not find an image for {q}")

