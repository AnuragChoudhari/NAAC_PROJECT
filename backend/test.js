const validatedTokens = (str) =>{
    const pattern = /[]/;
    const res = str.match(pattern);

    console.log(res);

}

validatedTokens("Hello there, this, is @test function!.");