function makeMarquee (){
    const title = 'The Dawn! The Dawn! The crimson-tinted, comes Out of the low still skies, over the hills, Manhattans roofs and spires and cheerless domes! The Dawn! My spirit to its spirit thrills. Almost the mighty city is asleep, No pushing crowd, no tramping, tramping feet. But here and there a few cars groaning creep Along, above, and underneath the street, Bearing their strangely-ghostly burdens by, The women and the men of garish nights, Their eyes wine-weakened and their clothes awry, Grotesques beneath the strong electric lights. The shadows wane. The Dawn comes to New York. And I go darkly-rebel to my work.'
   //an array is a list of things
   //example ['lawrence', 'rick', 'milan', 1, FALSE, {name: 'larence', location: 'melvin'}]
   
   //we then join them together with a space and this dash using join
   const marqueText = new Array(1).fill(title).join(' — ')
   
   //1. we want to grab our .marque span from html
   //2. we want to set our repeating title as the content
   
   //querySelector and querySelector all = $ in jQuery
   const marquee = document.querySelector('.marquee span')
   //using innerHTML we can add text to our marquee/replace it 
   marquee.innerHTML = marqueText
   //so what we've done is create an array with 50 things in the list, inputted title which is a copy of our title as a string, then added this array as inner html
   //run function we made
   }
   function marqueeoff (){
        const title = 'Dawn In NY by Claude McKay'
        const marquee = document.querySelector('.marquee span')
        marquee.innerHTML = title


   }
