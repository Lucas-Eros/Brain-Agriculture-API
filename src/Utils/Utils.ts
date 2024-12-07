const isValidCpf = (cpf: string) : boolean => {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

const isValidCnpj = (cnpj : string) : boolean  => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  let soma = 0;
  let resto;
  const multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj.charAt(i)) * multiplicadores1[i];
  }
  resto = soma % 11;
  if (resto < 2) resto = 0;
  else resto = 11 - resto;
  if (resto !== parseInt(cnpj.charAt(12))) return false;

  soma = 0;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj.charAt(i)) * multiplicadores2[i];
  }
  resto = soma % 11;
  if (resto < 2) resto = 0;
  else resto = 11 - resto;
  return resto === parseInt(cnpj.charAt(13));
}

export const isValidCpfOrCnpj = (value: string) : boolean => {
  value = value.replace(/[^\d]+/g, ''); 

  if (value.length === 11) {
    return isValidCpf(value);
  } else if (value.length === 14) {
    return isValidCnpj(value);
  }

  return false;
}

