document.addEventListener('DOMContentLoaded', function() {
    // theme-toggle.js
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const latestPosts = document.getElementById('latest-posts');
    const post_content = document.getElementById('post-content');
    const header_sec = document.getElementById('welcome');
    const about_sec = document.getElementById('about');
    const para = document.getElementById('para');
    const para2 = document.getElementById('para2');
    const h2ss = document.getElementById('h2ss');
   

    themeToggle.addEventListener('click', () => {

        document.body.classList.toggle('dark');
        toggleIcon.classList.toggle('dark');
        // Toggle background color
        if (document.body.classList.contains('dark')) {
            // console.log("ye")
            document.body.style.backgroundColor = 'rgb(14, 14, 14)';
            
        } else {
            document.body.style.backgroundColor = ''; // Reset to default
            
        }
        // Toggle background color for #latest-posts
        if(about_sec){
            console.log("wdw")
            if (document.body.classList.contains('dark')){
                about_sec.style.background = 'linear-gradient(to right top, rgb(11, 11, 11), #000)'
                h2ss.style.color = '#fff';
                para.style.color = 'rgb(208, 208, 208)';
                para2.style.color = 'rgb(208, 208, 208)';
            }else{
                about_sec.style.background = 'none'
                about_sec.style.backgroundColor = '#e48900';
                h2ss.style.color = 'rgb(24, 24, 24)';
                para.style.color='rgb(43, 43, 43)';
                para2.style.color='rgb(43, 43, 43)';
            }
        }
        if (latestPosts) {
            if (document.body.classList.contains('dark')) {
                latestPosts.style.backgroundColor = 'black';
                latestPosts.style.color = 'white';
                post_content.style.color='rgb(222, 222, 222)';
                header_sec.style.background= 'linear-gradient(to right top, rgb(31, 31, 31), #000)';
                
            } else {
                latestPosts.style.backgroundColor = 'white'; // Reset to default
                latestPosts.style.color = 'black';
                post_content.style.color='black';
                header_sec.style.background= 'linear-gradient(to right top, #6305dd, #390281)';
            }
        }
    });

});
