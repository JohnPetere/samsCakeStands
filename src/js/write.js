import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get, remove} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.querySelector("#cakeStandImgInput").addEventListener("change", onImageSelected);
document.forms["cakeStandAddEditForm"].addEventListener("submit", onSubmitCakeStand); 


    function onSubmitCakeStand(e) {
        e.preventDefault();
        uploadCakeStandItem();
    }
  

   function onImageSelected(e) {
    //selected file
    // file objets   [fileObj, fileObj, fileObj]
    let file = e.target.files[0];
    // console.log(file)
    // update the display with the requested image
    document.querySelector("#cakeStandImg").src = URL.createObjectURL(file);
     
    }

    async function uploadCakeStandItem() {
        console.log("Hello did it add?")
        // form data
        const productTitle = document.querySelector('#productTitle').value.trim();
        console.log("productTitle", productTitle)
        const productImage = document.querySelector('#cakeStandImgInput').files[0]
        console.log("product Image", productImage)
        const productPriced = document.querySelector('#standPrice').value;
        const standRadius = document.querySelector('#standRadius').value;
        // paths to the data to write
        const imageRef =     storageRef( storage, `images/${productImage.name}`);
        const dataRef =  databaseRef( db, 'cake-stands')
        
        // uploading file to the storage bucket
        const uploadResult = await uploadBytes(imageRef, productImage);
        // url to the image stored in storage bucket
        const urlPath =  await getDownloadURL(imageRef) 
        // path on the storage bucket to the image
        const storagePath = uploadResult.metadata.fullPath;

        // firebase unique key
        const itemRef = await push(dataRef)
        
        set(itemRef,{
           key:itemRef.key,
           sku:`jhvr${itemRef.key}`,
           title: productTitle,
           urlPath,
           storagePath,
           price:productPriced,
           radius:standRadius
        })
        
    }
/**
 * 
{
    "shop-item": {
      "-MuBYwRNh8urhG5Cabvd": {
        "key": "MuBYwRNh8urhG5Cabvd",
        "sku": "unique product sku",
        "image": "product-url",
        "title": "product title",
        "price": "product pr",
        "radius": "your custom property"
        }
      }
}



 */