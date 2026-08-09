import urllib.request
import json
import ssl
import urllib.parse

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch_wiki_image(title, filename):
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&titles=File:{urllib.parse.quote(title)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
        pages = data['query']['pages']
        for page_id in pages:
            if 'imageinfo' in pages[page_id]:
                img_url = pages[page_id]['imageinfo'][0]['url']
                print(f"Downloading {title} from {img_url}")
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                img_data = urllib.request.urlopen(img_req, context=ctx).read()
                with open(f"public/images/{filename}", "wb") as f:
                    f.write(img_data)
                return True
    except Exception as e:
        print(f"Error fetching {title}: {e}")
    return False

# This is an image of a person wearing jeans
fetch_wiki_image("Jeans.jpg", "modest_jeans.jpg")

