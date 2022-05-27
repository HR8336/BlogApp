export const valueMaker = (value, options) => {
  try {
    let defaultV = [];
    if (!value) return defaultV;
    value.forEach((obj) => {
      let selected = options.find((data) => data.value === obj);
      if (selected) defaultV.push(selected);
    });
    // console.log("default", defaultV);
    return defaultV;
  } catch (err) {
    return [];
  }
};
