// listen for form submit 


document.getElementById('submit').addEventListener('click', saveBookmark);


//save Bookmark
function saveBookmark(e){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteURL').value;
    
    
    //Validation 
    
    if(!siteName || !siteUrl){
        alert('Please fill the form');
        return false;
    }
    
    
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
    
    if(!siteUrl.match(regex)){
       alert('Please use a valid URL');
        return false;
       }
    
    
    var bookmark = {
    name:siteName,
    url:siteUrl
    }    

    
    
//    local storage Test
//    localStorage.setItem('test', 'hello world');
//     console.log(localStorage.getItem('test'));   
//    localStorage.removeItem('test');
//    console.log(localStorage.getItem('test'));  
    
    
    //if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
        //inital array
        var bookmarks =[ ];
        //add to arrya
        bookmarks.push(bookmark);
        //set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    } else {
        // Get bookmark from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        
        //Add bookmark to array
        bookmarks.push(bookmark);
        
        //reset it back to localstorage
 localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    //fetch bookmark
    fetchBookmarks();
    //Prevents Default
    e.preventDefault();    
}


//Delete bookmark
function deleteBookmark(url){
    
    //Get bookmarks from local storage
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
               

    //Loop through boookmarks 
    
   for(var i=0; i<bookmarks.length; i++){
              
       
       
      
       if(bookmarks[i].url ){
            //Remove from array
           bookmarks.splice(i, 1);  
       }
   }
    
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //refetch
    fetchBookmarks();
}



//Fetch bookmarks


function fetchBookmarks(){
    // Get bookmark from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //Get Output id
    
    
    var bookmarksResults = document.getElementById('bookmarksResults');
    
    //Build ourput
    bookmarksResults.innerHTML = "";
    
    
    for(var i=0; i< bookmarks.length; i++){
        
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        
        bookmarksResults.innerHTML += '<div class="well">' +
            
                                        '<h3>'+ name + 
                                        '<a  onClick="deleteBookmark(\' '+ url+ '\')" class="btn btn-danger float-right" href="#">Delete</a>'+'<a class="btn btn-success float-right mr-3" target="_blank" href="'+url+'">Visit</a>'+
                                        '</h3>' +
                                        '</div>'
            
            ;
    }
    
    
}


