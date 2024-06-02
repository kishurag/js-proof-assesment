/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


let nftCollection=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (movieName,directorName,releaseYear,movieDescription) {
    const nft={
        movieName:movieName,
        directorName:directorName,
        releaseYear:releaseYear,
        movieDescription:movieDescription
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nftCollection.length;i++){
        console.log("Movie Name : "+nftCollection[i].movieName);
        console.log("Actor Name : "+nftCollection[i].directorName);
        console.log("Release Year : "+nftCollection[i].releaseYear);
        console.log("Movie Description: "+nftCollection[i].movieDescription);
        console.log('...');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line
mintNFT("Kishan Weds Ragni","Kishan Kumar",2024,"A story of two lovers whose parrents were not ready for marriage");
mintNFT("Rockstar","Davemustinue",2023,"A story of talented dancer");

listNFTs();
console.log("Total Supply: "+ getTotalSupply());

