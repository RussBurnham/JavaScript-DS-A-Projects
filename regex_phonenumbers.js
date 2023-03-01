function telephoneCheck(str) {
  let regex1 = /^(1\s||1)?\d{3}-\d{3}-\d{4}$/;
  let regex2 = /^(1\s||1)?\(\d{3}\)\d{3}-\d{4}$/;
  let regex3 = /^(1\s||1)?\(\d{3}\)\s\d{3}-\d{4}$/;
  let regex4 = /^(1\s||1)?\d{3}\s\d{3}\s\d{4}$/;
  let regex5 = /^\d{10}$/;
  let regex6 = /^(1\s||1)?\d{3}\s\d{3}\s\d{4}$/;

  if (
    regex1.test(str) ||
    regex2.test(str) ||
    regex3.test(str) ||
    regex4.test(str) ||
    regex5.test(str) ||
    regex6.test(str)
  ) {
    return true;
  } else {
    return false;
  }
}
