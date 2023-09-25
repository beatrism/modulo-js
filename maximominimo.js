function encontrarIndicesMaximoMinimo(arr) {
    if (arr.length === 0) {
      return "O array está vazio.";
    }
  
    let indiceMaximo = 0;
    let indiceMinimo = 0;
    let valorMaximo = arr[0];
    let valorMinimo = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > valorMaximo) {
        valorMaximo = arr[i];
        indiceMaximo = i;
      } else if (arr[i] < valorMinimo) {
        valorMinimo = arr[i];
        indiceMinimo = i;
      }
    }
  
    return { indiceMaximo, indiceMinimo };
  }
  
  const arrayNumerico = [5, 12, 3, 8, 9, 1];
  
  const indices = encontrarIndicesMaximoMinimo(arrayNumerico);
  console.log(`O índice do maior valor é ${indices.indiceMaximo}`);
  console.log(`O índice do menor valor é ${indices.indiceMinimo}`);