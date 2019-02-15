const makeImage = (url, height=20, width=20) => {
    const image = document.createElement("img");
    image.height = height;
    image.width = width;
    image.src = url;
    return image;
};

export default makeImage;