import os, json, glob

def scan():
    fotos = sorted([p.replace("\\", "/") for p in glob.glob("foto/f*.*")])
    sync = sorted([p.replace("\\", "/") for p in glob.glob("foto/L*.*")])
    videos = sorted([p.replace("\\", "/") for p in glob.glob("video/*.*")])
    drive_videos = []
    if os.path.exists("media_tambahan.json"):
        with open("media_tambahan.json", "r", encoding="utf-8") as f:
            extra = json.load(f)
            drive_videos = extra.get("drive_videos", [])
    data = {
        "fotos": fotos,
        "videos": videos,
        "sync": sync,
        "drive_videos": drive_videos
    }
    with open("media.js", "w", encoding="utf-8") as f:
        f.write("window.MEDIA=" + json.dumps(data, ensure_ascii=False) + ";\n")
    print(f"media.js diperbarui: {len(fotos)} foto, {len(sync)} sync, {len(videos)} video lokal, {len(drive_videos)} video Drive.")

if __name__ == "__main__":
    scan()
