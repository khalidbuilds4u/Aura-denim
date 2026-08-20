import sys
from PIL import Image

def remove_dark_bg(input_path, output_path, threshold=20):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check if the pixel is dark (r, g, b all below threshold)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # Full transparent
            new_data.append((255, 255, 255, 0))
        elif item[0] < threshold + 15 and item[1] < threshold + 15 and item[2] < threshold + 15:
            # Semi-transparent for smooth edges
            alpha = int(((item[0] + item[1] + item[2]) / 3 - threshold) / 15 * 255)
            new_data.append((item[0], item[1], item[2], max(0, alpha)))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_dark_bg(sys.argv[1], sys.argv[2])
    print(f"Background removed for {sys.argv[1]}")
