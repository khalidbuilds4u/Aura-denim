import urllib.request
import re
import sys

def get_image(query, filename):
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # find images.unsplash.com/photo-...
        matches = re.findall(r'(https://images\.unsplash\.com/photo-[a-zA-Z0-9-]+[^"\?&]*)\?', html)
        if matches:
            img_url = matches[0] + "?w=1024&q=80"
            print(f"Downloading {query} from {img_url}")
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            img_data = urllib.request.urlopen(img_req).read()
            with open(f"public/images/{filename}", "wb") as f:
                f.write(img_data)
            return True
    except Exception as e:
        print(f"Error fetching {query}: {e}")
    return False

queries = {
    "denim jacket": "denim_jacket.jpg",
    "blue denim shirt": "denim_shirt.jpg",
    "denim dress": "denim_dress.jpg",
    "denim skirt": "denim_skirt.jpg",
    "denim overalls": "denim_overalls.jpg",
    "denim trench coat": "denim_trench.jpg",
    "denim vest": "denim_vest.jpg",
    "raw denim texture": "denim_texture.jpg",
    "blue jeans folded": "denim_jeans.jpg",
    "denim closeup": "denim_closeup.jpg"
}

for q, f in queries.items():
    get_image(q, f)

