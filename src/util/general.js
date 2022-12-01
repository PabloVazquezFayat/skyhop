export function dedupFilesArray(files) {
  console.log(files);
  const filesMap = {};

  for (let i = 0; i < files.length; i++) {
    filesMap[files[i].name] = files[i];
  }

  return Object.values(filesMap);
}

export function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
