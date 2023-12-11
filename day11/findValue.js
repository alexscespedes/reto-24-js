function searchValue(array, value) {
        const singleArray = array.flatMap((x) => x);
        const index = singleArray.findIndex((val) => val === value);
        if (index === -1) {
        throw new Error("Valor no encontrado");
        }
    
        const row = Math.floor(index / array[0].length);
        const column = index % array[0].length;
    
        // return { row, column };
        console.log({ row, column })
    }

    const array = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      
      const value = 5
      
      searchValue(array, value)
      