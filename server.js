const firebaseConfig = { /* Your config from Firebase */ };
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function uploadVideo() {
    const fileInput = document.getElementById('videoUpload');
    const file = fileInput.files[0];
    if (file) {
        const storageRef = storage.ref('videos/' + file.name);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then(url => {
                savedVideos.push({ url: url, name: file.name });
                localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
                loadSavedVideos();
                alert("Video uploaded and saved permanently!");
                fileInput.value = '';
                showSection('tags');
            });
        });
    } else {
        alert("Please select a video file first!");
    }
}