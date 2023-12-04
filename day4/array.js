function findFamousCats(cats) {
    let maxFollowers = 0
    let listOfCats = []

    cats.forEach(cat => {
        const followers = cat.followers.reduce((accumulator, value) => accumulator + value, 0)
        if (followers == maxFollowers){
            listOfCats.push(cat.name)
        } else if (followers > maxFollowers) {
            listOfCats = [cat.name]
            maxFollowers = followers
        }
        // console.log(listOfCats)
    })

    return listOfCats
    
    }

findFamousCats([
        {
            name: "Luna",
            followers: [500, 200, 300]
        },
        {
            name: "Michi",
            followers: [100, 300]
        },
        ])