const getImageUrl = (assetId, width, height) => {
  const cloudinaryUrl = 'https://res.cloudinary.com/heed/image/upload/';
  const routeVersion = 'v1557823200/';
  let dimensions = '';

  if (width) {
    dimensions += `w_${width},`;
  } if (height) {
    dimensions += `h_${width},`;
  } if (width || height) {
    dimensions += 'c_scale/';
  }

  return cloudinaryUrl + dimensions + routeVersion + assetId;
};

export default getImageUrl;
