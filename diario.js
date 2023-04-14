fetch("dados.json").then((response) => {
    response.json().then((dados) => {
      
      let vTotal = dados.reduce(function(i, vTotal) { 
            return vTotal.valor + i ;
       },0);
     
       let vt = vTotal / 21;
       const forVt = vt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
       const forVtotal = vTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        console.log(`O Total do Faturamento mensal é de ${forVtotal} e a média diária é de ${forVt} `)

        const minValue = dados.reduce(function(prev, current) { 
            return prev.valor ==! 0 < current.valor ==! 0 ? prev : current ; 
          
        });
        const forMin = minValue.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        console.log( `O dia de menor saída foi dia ${minValue.dia}, e o valor foi de ${forMin}`);
        
        const maxValue = dados.reduce(function(prev, current) { 
            return prev.valor > current.valor ? prev : current; 
        });
        const forMax = maxValue.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        console.log( `O dia de maior saída foi dia ${maxValue.dia}, e o valor foi de ${forMax}`);

    })
});





 