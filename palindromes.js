function palindrome(str) {
  str = str.toLowerCase().trim().replace(/\W/g, "").replace(/_/g, "");
  let halfStr = "";
  if ((str.length % 2 === 0) === true) {
    for (let i = str.length - 1; i >= str.length / 2; i--) {
      halfStr += str[i];
    }
    str = str.slice(str[0], str.length / 2);
    if (str === halfStr) {
      return true;
    } else {
      return false;
    }
  } else {
    for (let i = str.length - 1; i > str.length / 2 - 1; i--) {
      halfStr += str[i];
    }
    str = str.slice(str[0], Math.round(str.length / 2));
    if (str === halfStr) {
      return true;
    } else {
      return false;
    }
  }
}
