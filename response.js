function toggleImage1() {
    const image1 = document.getElementById('movdot1-img');
    image1.style.display = (image1.style.display === 'none' || image1.style.display === '') ? 'block' : 'none';

    if (image1.style.display === 'block') {
        setTimeout(function () {
            image1.style.display = 'none';
        }, 3000); // 3 seconds
    }
}


function toggleImage2() {
    const image2 = document.getElementById('movdot2-img');
    image2.style.display = (image2.style.display === 'none' || image2.style.display === '') ? 'block' : 'none';

    if (image2.style.display === 'block') {
        setTimeout(function () {
            image2.style.display = 'none';
        }, 3000); // 3 seconds
    }
}





function toggleImage3() {
    const image3 = document.getElementById('movdot3-img');
    image3.style.display = (image3.style.display === 'none' || image3.style.display === '') ? 'block' : 'none';

    if (image3.style.display === 'block') {
        setTimeout(function () {
            image3.style.display = 'none';
        }, 3000); // 3 seconds
    }
}



function toggleImage4() {
    const image4 = document.getElementById('movdot4-img');
    image4.style.display = (image4.style.display === 'none' || image4.style.display === '') ? 'block' : 'none';

    if (image4.style.display === 'block') {
        setTimeout(function () {
            image4.style.display = 'none';
        }, 3000); // 3 seconds
    }
}




function toggleImage5() {
    const image5 = document.getElementById('movdot5-img');
    image5.style.display = (image5.style.display === 'none' || image5.style.display === '') ? 'block' : 'none';

    if (image5.style.display === 'block') {
        setTimeout(function () {
            image5.style.display = 'none';
        }, 3000); // 3 seconds
    }
}




function toggleImage6() {
    const image6 = document.getElementById('movdot6-img');
    image6.style.display = (image6.style.display === 'none' || image6.style.display === '') ? 'block' : 'none';

    if (image6.style.display === 'block') {
        setTimeout(function () {
            image6.style.display = 'none';
        }, 3000); // 3 seconds
    }
}



























// This code belongs to  ninth segment 


// Function to play animations when hovered over ninth-segment container or ninth-segment
function playAnimationsOnHover() {
    var ninthSegmentContainer = document.getElementById('ninth-segment-container');
    var ninthSegment = document.getElementById('ninth-segment');
    var nsElements = document.querySelectorAll('.ns-images');

    ninthSegmentContainer.addEventListener('mouseenter', playAnimations);
    ninthSegmentContainer.addEventListener('mouseleave', resetAnimations);

    ninthSegment.addEventListener('mouseenter', playAnimations);
    ninthSegment.addEventListener('mouseleave', resetAnimations);

    function playAnimations() {
        nsElements.forEach(function (element) {
            element.style.animationPlayState = 'running';
        });
    }

    function resetAnimations() {
        nsElements.forEach(function (element) {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = '';
        });
    }
}

// Call the playAnimationsOnHover function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    playAnimationsOnHover();
});





































// start of fourteen segment 
function clickdot1() {
    const dot1 = document.getElementById('m-dot1');

    dot1.style.backgroundColor = '#229bd5';
    dot1.style.transition = 'transform 0.1s ease';
    dot1.style.transform = 'scale(1.3)'; 

    document.addEventListener('click', function(event) {
        const targetElement = event.target;

        // Check if the clicked element is dot1
        if (targetElement === dot1) {
            const backimg1 = document.getElementById('fourteen-segment-bg-img1');
            backimg1.style.backgroundImage = 'url(imges/camera/slow-motion.jpg)';
        } else {
            dot1.style.backgroundColor = 'white';
            dot1.style.transition = 'transform 0.3s ease';
            dot1.style.transform = 'scale(1)'; 
        }
    });
}

function clickdot2() {
    const dot2 = document.getElementById('m-dot2');
    
    dot2.style.backgroundColor = '#229bd5';
    dot2.style.transition = 'transform 0.1s ease';
    dot2.style.transform = 'scale(1.3)'; 

    document.addEventListener('click', function(event) {
        const targetElement = event.target;

        // Check if the clicked element is dot2
        if (targetElement === dot2) {
            const backimg2 = document.getElementById('fourteen-segment-bg-img1');
            backimg2.style.backgroundImage = 'url(imges/camera/photo-img.jpg)';
        } else {
            dot2.style.backgroundColor = 'white';
            dot2.style.transition = 'transform 0.3s ease';
            dot2.style.transform = 'scale(1)'; 
        }
    });
}


function clickdot3() {
    const dot3 = document.getElementById('m-dot3');

    dot3.style.backgroundColor = '#229bd5';
    dot3.style.transition = 'transform 0.1s ease';
    dot3.style.transform = 'scale(1.3)'; 

    document.addEventListener('click', function(event) {
        const targetElement = event.target;

        // Check if the clicked element is dot3
        if (targetElement === dot3) {
            const backimg3 = document.getElementById('fourteen-segment-bg-img1');
            backimg3.style.backgroundImage = 'url(imges/camera/film.jpg)';
        } else {
            dot3.style.backgroundColor = 'white';
            dot3.style.transition = 'transform 0.3s ease';
            dot3.style.transform = 'scale(1)'; 
        }
    });
}

function clickdot4() {
    const dot4 = document.getElementById('m-dot4');
    
    dot4.style.backgroundColor = '#229bd5';
    dot4.style.transition = 'transform 0.1s ease';
    dot4.style.transform = 'scale(1.3)'; 

    document.addEventListener('click', function(event) {
        const targetElement = event.target;

        // Check if the clicked element is dot4
        if (targetElement === dot4) {
            const backimg4 = document.getElementById('fourteen-segment-bg-img1');
            backimg4.style.backgroundImage = 'url(imges/camera/video-camera.jpg)';
        } else {
            dot4.style.backgroundColor = 'white';
            dot4.style.transition = 'transform 0.3s ease';
            dot4.style.transform = 'scale(1)'; 
        }
    });
}








function clickdot5() {
    const dot5 = document.getElementById('m-dot5');

    dot5.style.backgroundColor = '#229bd5';
    dot5.style.transition = 'transform 0.1s ease';
    dot5.style.transform = 'scale(1.3)'; 

    document.addEventListener('click', function(event) {
        const targetElement = event.target;

        // Check if the clicked element is dot5
        if (targetElement === dot5) {
            const backimg5 = document.getElementById('fourteen-segment-bg-img1');
            backimg5.style.backgroundImage = 'url(imges/camera/night-mode.jpg)';
        } else {
            dot5.style.backgroundColor = 'white';
            dot5.style.transition = 'transform 0.3s ease';
            dot5.style.transform = 'scale(1)'; 
        }
    });
}




