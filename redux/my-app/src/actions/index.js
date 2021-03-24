export const newAction = (state) => ({ type: 'NEW_ACTION', state });

/* Uma action , por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type 
ou mais outras keys, caso seja conveniente. Note que, no caso abaixo, 
criamos também uma key state , que guardará o valor recebido pela action. */