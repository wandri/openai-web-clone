export enum SIZE {
  SM,
  MD,
  LG,
  XL,
  XXL
}

export function getDeviceDimension(size: number): SIZE {
  if (size >= 1536) {
    return SIZE.XXL
  } else if (size >= 1280) {
    return SIZE.XL
  } else if (size >= 1024) {
    return SIZE.LG
  } else if (size >= 768) {
    return SIZE.MD
  }
  return SIZE.SM
}
