document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("profileform");
	const inputName = document.getElementById("profileName");
	const inputEmail = document.getElementById("profileEmail");
	const inputBio = document.getElementById("profileBio");
	const displaySideName = document.getElementById("sideDisplayName");

	function loadUserProfile() {
        const savedProfileRaw = localStorage.getItem("userProfileData");
        if (savedProfileRaw){
            const profile = JSON.parse(savedProfileRaw);
            inputName.value = profile.name;
            inputEmail.value = profile.email;
            inputBio.value = profile.bio;
            displaySideName.textContent = profile.name;
        }
	}
});