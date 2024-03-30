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











