module.exports = [
  // 图片文件
  {
    byteSeq: new Buffer([0xff, 0xd8, 0xff]),
    description: 'A commonly used method of lossy compression for digital photography (image).',
    mime: 'image/jpg',
    type: 'image',
    extensions: ['jpg', 'jpeg']
  },
  {
    byteSeq: new Buffer([0x42, 0x4d]),
    mime: 'image/bmp',
    type: 'image',
    description: "BMP file, a bitmap format used mostly in the Windows world",
    extensions: ['bmp', 'dib']
  },
  {
    byteSeq: new Buffer([0x47, 0x49, 0x46, 0x38]),
    description: "Image file encoded in the Graphics Interchange Format (GIF)[2]",
    mime: 'image/gif',
    type: 'image',
    extensions: ['gif']
  },
  {
    byteSeq: new Buffer([0x47, 0x49, 0x46, 0x38, 0x37, 0x61, 0x47, 0x49, 0x46, 0x38, 0x39, 0x61]),
    description: "Image file encoded in the Graphics Interchange Format (GIF)[2]",
    mime: 'image/gif',
    type: 'image',
    extensions: ['gif']
  },
  {
    byteSeq: new Buffer([0x89, 0x50, 0x4e, 0x47]),
    description: "Image encoded in the Portable Network Graphics format[5]",
    mime: 'image/png',
    type: 'image',
    extensions: ['png']
  },
  {
    byteSeq: new Buffer([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    description: "Image encoded in the Portable Network Graphics format[5]",
    mime: 'image/png',
    type: 'image',
    extensions: ['png']
  },
  {
    byteSeq: new Buffer([0x49, 0x20, 0x49]),
    mime: 'image/tiff',
    description: "Tagged Image File Format",
    type: 'image',
    extensions: ['tif', 'tiff']
  },
  {
    byteSeq: new Buffer([0x4d, 0x4d, 0x00, 0x2a]),
    mime: 'image/tiff',
    description: "Tagged Image File Format",
    type: 'image',
    extensions: ['tif', 'tiff']
  },
  {
    byteSeq: new Buffer([0x49, 0x49, 0x2a, 0x00]),
    mime: 'image/tiff',
    description: "Tagged Image File Format",
    type: 'image',
    extensions: ['tif', 'tiff']
  },
  {
    byteSeq: new Buffer([0x49, 0x49, 0x2A, 0x00, 0x4D, 0x4D, 0x00, 0x2A]),
    mime: 'image/tiff',
    description: "Tagged Image File Format",
    type: 'image',
    extensions: ['tif', 'tiff']
  },
  {
    byteSeq: new Buffer([0x00, 0x00, 0x01, 0x00]),
    description: "Computer icon encoded in ICO file format[1]",
    mime: "image/x-icon",
    type: 'image',
    extensions: ["ico"]
  },
  {
    byteSeq: new Buffer([0x38, 0x42, 0x50, 0x53]),
    description: "Photoshop Document file, Adobe Photoshop's native file format",
    mime: "image/vnd.adobe.photoshop",
    extensions: ["psd"]
  },
  {
    byteSeq: new Buffer([0x43, 0x44, 0x30, 0x30, 0x31]),
    description: "ISO9660 CD/DVD image file[9]",
    mime: "application/x-iso9660-image",
    extensions: ["iso"]
  },
  {
    byteSeq: new Buffer([0x00]),
    extensions: ["PIC", "PIF", "SEA", "YTR"],
    description: "IBM Storyboard bitmap file\nWindows Program Information File\nMac Stuffit Self-Extracting Archive\nIRIS OCR data file\n"
  },
  // 数据库文件
  {
    byteSeq: new Buffer([0xBE, 0xBA, 0xFE, 0xCA]),
    extensions: ["DBA"],
    description: "Palm Desktop Calendar Archive"
  },
  {
    byteSeq: new Buffer([0x00, 0x01, 0x42, 0x44]),
    extensions: ["DBA"],
    description: "Palm Desktop Calendar Archive"
  },
  {
    byteSeq: new Buffer([0x00, 0x01, 0x44, 0x54]),
    extensions: ["TDA"],
    description: "Palm Desktop Calendar Archive"
  },
  {
    byteSeq: new Buffer([0x00, 0x01, 0x00, 0x00]),
    extensions: ["..."],
    description: "Palm Desktop Data File (Access format)"
  },
  // 压缩文件
  {
    byteSeq: new Buffer([0x1F, 0x9D]),
    extensions: ["z", "tar.z"],
    description: "compressed file (often tar zip)"
  },
  {
    byteSeq: new Buffer([0x1F, 0xA0]),
    extensions: ["z", "tar.z"],
    description: "compressed file (often tar zip)"
  },
  {
    byteSeq: new Buffer([0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x00]),
    description: "RAR archive version 1.50 onwards[3]",
    mime: "application/x-rar-compressed",
    extensions: ["rar"]
  },
  {
    byteSeq: new Buffer([0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x01, 0x00]),
    description: "RAR archive version 5.0 onwards[4]",
    mime: "application/x-rar-compressed",
    extensions: ["rar"]
  },
  // 视频文件
  {
    byteSeq: new Buffer([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9, 0x00, 0xAA, 0x00, 0x62, 0xCE, 0x6C]),
    extensions: ["asf", "asx", "wma", "wmv"],
    description: "Advanced Systems Format[8]",
    mime: "video/x-ms-asf",
    type: 'video'
  },

  // 音频文件
  {
    byteSeq: new Buffer([0x66, 0x4C, 0x61, 0x43]),
    description: "Free Lossless Audio Codec[11]",
    mime: "audio/x-flac",
    extensions: ["flac"],
    type: 'audio'
  },
  {
    byteSeq: new Buffer([0x4F, 0x67, 0x67, 0x53]),
    extensions: ["ogg", "oga", "ogv", "spx"],
    description: "Ogg, an open source media container format",
    type: 'audio'
  },
  {
    byteSeq: new Buffer([0xFF, 0xFB]),
    description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which's appended at the end of the file)",
    mime: "audio/mpeg",
    extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
  },
  {
    byteSeq: new Buffer([0x49, 0x44, 0x33]),
    description: "MP3 file with an ID3v2 container",
    mime: "audio/mpeg",
    extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
  },

  // 文档文件
  {
    byteSeq: new Buffer([0x25, 0x50, 0x44, 0x46]),
    description: "PDF documents",
    mime: "application/pdf",
    extensions: ["pdf"]
  },
  {
    byteSeq: new Buffer([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]),
    description: "Microsoft Word document (prior version 2007)",
    mime: "application/msword",
    extensions: ['doc']
  },
  {
    byteSeq: new Buffer([0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1, 0x00]),
    description: "Microsoft Word document (prior version 2007)",
    mime: "application/msword",
    extensions: ['doc']
  },
  {
    byteSeq: new Buffer([0x0d, 0x44, 0x4f, 0x43]),
    description: "Microsoft Word document (prior version 2007)",
    mime: "application/msword",
    extensions: ['doc']
  },
  {
    byteSeq: new Buffer([0xec, 0xa5, 0xc1, 0x00]),
    description: "Microsoft Word document (prior version 2007)",
    mime: "application/msword",
    extensions: ['doc']
  },
  {
    byteSeq: new Buffer([0xdb, 0xa5, 0x2d, 0x00]),
    description: "Microsoft Word document (prior version 2007)",
    mime: "application/msword",
    extensions: ['doc']
  },
  {
    byteSeq: new Buffer([0x50, 0x4b, 0x03, 0x04]),
    description: "MS Office Open XML Format Document",
    mime: "application/msword",
    extensions: ['docx']
  },
  {
    byteSeq: new Buffer([0x50, 0x4b, 0x03, 0x14, 0x00, 0x06, 0x00]),
    description: "MS Office 2007 documents",
    mime: "application/msword",
    extensions: ['docx']
  },
  // 编程文件
  {
    byteSeq: new Buffer([0x4D, 0x5A]),
    description: "DOS MZ executable file format and its descendants (including NE and PE)",
    mime: "application/x-msdownload",
    extensions: ["exe", "dll", "com", "bat", "msi"]
  },
  {
    byteSeq: new Buffer([0xCA, 0xFE, 0xBA, 0xBE]),
    description: "Java class file, Mach-O Fat Binary",
    mime: "application/java-vm",
    extensions: ["class"]
  },
  // 系统文件
  {
    byteSeq: new Buffer([0x53, 0x49, 0x4d, 0x50, 0x4c, 0x45, 0x20, 0x20, 0x3d, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x54]),
    extensions: ["fits"],
    description: "Flexible Image Transport System (FITS)[10]"
  },
]