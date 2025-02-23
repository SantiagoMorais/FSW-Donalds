export const removeZipCodePunctuation = (zipCode: string) => {
  return zipCode.replace(/[\.\-]/g, "");
};

export const isValidZipCode = (zipCode: string): boolean => {
  // Remove non-numeric characters
  zipCode = zipCode.replace(/\D/g, "");

  // Check if the CPF has 11 digits
  if (zipCode.length !== 11) return false;

  // Eliminate CPFs with all digits the same (e.g. 000.000.000-00)
  if (/^(\d)\1+$/.test(zipCode)) return false;

  // Calculate the first check digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(zipCode.charAt(i)) * (10 - i);
  }
  let firstVerifier = (sum * 10) % 11;
  firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;

  if (firstVerifier !== parseInt(zipCode.charAt(9))) return false;

  // Calculate the second check digit,
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(zipCode.charAt(i)) * (11 - i);
  }
  let secondVerifier = (sum * 10) % 11;
  secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;

  return secondVerifier === parseInt(zipCode.charAt(10));
};
