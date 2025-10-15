// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('loginForm');
//     const loginContainer = document.querySelector('.login-container');
//     const dashboardWrapper = document.querySelector('.dashboard-wrapper');
//     const sidebar = document.getElementById('sidebar');
//     const sidebarToggle = document.getElementById('sidebarToggle');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const mainContent = document.querySelector('.main-content');
//     const gutterGrid = document.getElementById('gutterGrid');
//     const addGutterBtn = document.getElementById('addGutterBtn');
//     const downloadPdfBtn = document.getElementById('downloadPdfBtn');
//     const addGutterModal = document.getElementById('addGutterModal');
//     const addGutterCloseBtn = document.querySelector('.gutter-close-btn');
//     const addGutterForm = document.getElementById('addGutterForm');
//     const emailInput = document.getElementById('email-input');

//     const profilePhotoEl = document.getElementById('profile-photo');
//     const profileNameEl = document.getElementById('profile-name');
//     const profileLocationEl = document.getElementById('profile-location');
//     const profilePhoneEl = document.getElementById('profile-phone');

//     const editProfileBtn = document.getElementById('editProfileBtn');
//     const editProfileModal = document.getElementById('editProfileModal');
//     const editProfileCloseBtn = document.querySelector('.profile-close-btn');
//     const editProfileForm = document.getElementById('editProfileForm');
//     const editProfilePhotoPreview = document.getElementById('edit-profile-photo-preview');
//     const uploadPhotoInput = document.getElementById('upload-photo');
//     const editProfileNameInput = document.getElementById('edit-profile-name');
//     const editProfileLocationInput = document.getElementById('edit-profile-location');
//     const editProfilePhoneInput = document.getElementById('edit-profile-phone');

//     let gutterCount = 0;
//     const gutterData = [];

//     const userProfiles = {
//         'sumit@gmal.com': {
//             name: 'Sumit',
//             location: 'Navi Mumbai',
//             phone: '9876543210',
//             photo: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/man-1837149_1280.jpg'
//         },
//         'gaurang@example.com': {
//             name: 'Gaurang Sabane',
//             location: 'Sai Nagar',
//             phone: '7709092864',
//             photo: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/portrait-3637171_1280.jpg'
//         },
//         'admin@gmal.com': {
//             name: 'Admin User',
//             location: 'Headquarters',
//             phone: '1122334455',
//             photo: 'https://cdn.pixabay.com/photo/2016/09/01/08/24/man-1635386_1280.jpg'
//         },
//         'manager@gmal.com': {
//             name: 'Waste Manager',
//             location: 'Central Depot',
//             phone: '1122334455',
//             photo: 'https://cdn.pixabay.com/photo/2017/08/07/19/46/business-2606554_1280.jpg'
//         }
//     };

//     let currentUserEmail = 'gaurang@example.com';
//     const defaultProfile = userProfiles['gaurang@example.com'];

//     function setProfileData(profile) {
//         profilePhotoEl.src = profile.photo;
//         profileNameEl.textContent = profile.name;
//         profileLocationEl.textContent = profile.location;
//         profilePhoneEl.textContent = profile.phone;
//     }

//     setProfileData(defaultProfile);

//     addInitialGutter('Smart Manhole 1', 'Sai Nagar', '192.168.1.101', 70, 30, 15);
//     addInitialGutter('Smart Manhole 2', 'Ram Nagar', '192.168.1.102', 95, 50, 85);
//     addInitialGutter('sum', '2545', '192.168.1.103', 55, 40, 75);

//     function addInitialGutter(name, address, ip, collection, temp, gas) {
//         gutterCount++;
//         const newGutterData = {
//             id: gutterCount,
//             name: name,
//             address: address,
//             ip: ip,
//             collection: collection,
//             temperature: temp,
//             gas: gas
//         };
//         gutterData.push(newGutterData);
//         const newCard = createNewGutterCard(newGutterData);
//         gutterGrid.appendChild(newCard);
//     }

//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const enteredEmail = emailInput.value;
//         let userProfile = userProfiles[enteredEmail];

//         if (!userProfile) {
//             userProfiles[enteredEmail] = {
//                 name: enteredEmail.split('@')[0],
//                 location: 'Unknown',
//                 phone: 'N/A',
//                 photo: 'https://via.placeholder.com/150'
//             };
//             userProfile = userProfiles[enteredEmail];
//         }

//         currentUserEmail = enteredEmail;
//         setProfileData(userProfile);
        
//         loginContainer.classList.remove('active');
        
//         setTimeout(() => {
//             loginContainer.style.display = 'none';
//             dashboardWrapper.style.display = 'flex';
//             dashboardWrapper.classList.add('visible');
//             sidebar.classList.add('active');
//             updateMainContentPadding();
//             animateAllIndicators();
//             checkAndSetAllAlerts();
//         }, 500);
//     });

//     sidebarToggle.addEventListener('click', () => {
//         sidebar.classList.toggle('active');
//         dashboardWrapper.classList.toggle('sidebar-open');
//         updateMainContentPadding();
//     });

//     function updateMainContentPadding() {
//         if (window.innerWidth > 768) {
//             if (sidebar.classList.contains('active')) {
//                 mainContent.style.paddingLeft = '280px';
//             } else {
//                 mainContent.style.paddingLeft = '0';
//             }
//         } else {
//             mainContent.style.paddingLeft = '0';
//         }
//     }

//     logoutBtn.addEventListener('click', () => {
//         dashboardWrapper.classList.remove('visible', 'sidebar-open');
//         sidebar.classList.remove('active');
//         mainContent.style.paddingLeft = '0';
//         setTimeout(() => {
//             dashboardWrapper.style.display = 'none';
//             loginContainer.style.display = 'block';
//             loginContainer.classList.add('active');
//             emailInput.value = '';
            
//             currentUserEmail = 'gaurang@example.com';
//             setProfileData(defaultProfile);
//         }, 500);
//     });

//     document.querySelectorAll('.tab').forEach(tab => {
//         tab.addEventListener('click', function() {
//             document.querySelectorAll('.tab').forEach(t => {
//                 t.classList.remove('active');
//             });
//             this.classList.add('active');
//         });
//     });

//     addGutterBtn.addEventListener('click', () => {
//         addGutterModal.style.display = 'block';
//     });

//     addGutterCloseBtn.addEventListener('click', () => {
//         addGutterModal.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target == addGutterModal) {
//             addGutterModal.style.display = 'none';
//         }
//         if (event.target == editProfileModal) {
//             editProfileModal.style.display = 'none';
//         }
//     });

//     addGutterForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const name = document.getElementById('gutter-name').value;
//         const address = document.getElementById('gutter-address').value;
//         const ip = document.getElementById('gutter-ip').value;

//         const collection = Math.floor(Math.random() * 100);
//         const temp = Math.floor(Math.random() * 60) + 15;
//         const gas = Math.floor(Math.random() * 100);

//         gutterCount++;
//         const newGutterData = {
//             id: gutterCount,
//             name: name,
//             address: address,
//             ip: ip,
//             collection: collection,
//             temperature: temp,
//             gas: gas
//         };
//         gutterData.push(newGutterData);

//         const newCard = createNewGutterCard(newGutterData);
//         gutterGrid.appendChild(newCard);
        
//         const deleteButton = newCard.querySelector('.delete-btn');
//         deleteButton.addEventListener('click', () => {
//             const gutterId = newCard.dataset.id;
//             const index = gutterData.findIndex(item => item.id == gutterId);
//             if (index > -1) {
//                 gutterData.splice(index, 1);
//             }
//             newCard.remove();
//         });

//         animateIndicators(newCard);
//         checkAndSetAlerts(newCard);

//         addGutterForm.reset();
//         addGutterModal.style.display = 'none';
//     });
    
//     function createNewGutterCard(data) {
//         const card = document.createElement('div');
//         card.classList.add('smart-gutter-card');
//         card.setAttribute('data-id', data.id);
//         card.setAttribute('data-collection-level', data.collection);












document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.querySelector('.login-container');
    const dashboardWrapper = document.querySelector('.dashboard-wrapper');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const logoutBtn = document.getElementById('logoutBtn');
    const mainContent = document.querySelector('.main-content');
    const gutterGrid = document.getElementById('gutterGrid');
    const addGutterBtn = document.getElementById('addGutterBtn');
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    const addGutterModal = document.getElementById('addGutterModal');
    const addGutterCloseBtn = document.querySelector('.gutter-close-btn');
    const addGutterForm = document.getElementById('addGutterForm');
    const emailInput = document.getElementById('email-input');

    const profilePhotoEl = document.getElementById('profile-photo');
    const profileNameEl = document.getElementById('profile-name');
    const profileLocationEl = document.getElementById('profile-location');
    const profilePhoneEl = document.getElementById('profile-phone');

    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileCloseBtn = document.querySelector('.profile-close-btn');
    const editProfileForm = document.getElementById('editProfileForm');
    const editProfilePhotoPreview = document.getElementById('edit-profile-photo-preview');
    const uploadPhotoInput = document.getElementById('upload-photo');
    const editProfileNameInput = document.getElementById('edit-profile-name');
    const editProfileLocationInput = document.getElementById('edit-profile-location');
    const editProfilePhoneInput = document.getElementById('edit-profile-phone');

    let gutterCount = 0;
    const gutterData = [];

    const userProfiles = {
        'sumit@gmal.com': {
            name: 'Sumit',
            location: 'Navi Mumbai',
            phone: '9876543210',
            photo: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/man-1837149_1280.jpg'
        },
        'gaurang@example.com': {
            name: 'Gaurang Sabane',
            location: 'Sai Nagar',
            phone: '7709092864',
            photo: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/portrait-3637171_1280.jpg'
        },
        'admin@gmal.com': {
            name: 'Admin User',
            location: 'Headquarters',
            phone: '1122334455',
            photo: 'https://cdn.pixabay.com/photo/2016/09/01/08/24/man-1635386_1280.jpg'
        },
        'manager@gmal.com': {
            name: 'Waste Manager',
            location: 'Central Depot',
            phone: '1122334455',
            photo: 'https://cdn.pixabay.com/photo/2017/08/07/19/46/business-2606554_1280.jpg'
        }
    };

    let currentUserEmail = 'gaurang@example.com';
    const defaultProfile = userProfiles['gaurang@example.com'];

    function setProfileData(profile) {
        profilePhotoEl.src = profile.photo;
        profileNameEl.textContent = profile.name;
        profileLocationEl.textContent = profile.location;
        profilePhoneEl.textContent = profile.phone;
    }

    setProfileData(defaultProfile);

    addInitialGutter('Smart Manhole 1', 'Sai Nagar', '192.168.1.101', 70, 30, 15);
    addInitialGutter('Smart Manhole 2', 'Ram Nagar', '192.168.1.102', 95, 50, 85);
    addInitialGutter('sum', '2545', '192.168.1.103', 55, 40, 75);

    function addInitialGutter(name, address, ip, collection, temp, gas) {
        gutterCount++;
        const newGutterData = {
            id: gutterCount,
            name: name,
            address: address,
            ip: ip,
            collection: collection,
            temperature: temp,
            gas: gas
        };
        gutterData.push(newGutterData);
        const newCard = createNewGutterCard(newGutterData);
        gutterGrid.appendChild(newCard);
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const enteredEmail = emailInput.value;
        let userProfile = userProfiles[enteredEmail];

        if (!userProfile) {
            userProfiles[enteredEmail] = {
                name: enteredEmail.split('@')[0],
                location: 'Unknown',
                phone: 'N/A',
                photo: 'https://via.placeholder.com/150'
            };
            userProfile = userProfiles[enteredEmail];
        }

        currentUserEmail = enteredEmail;
        setProfileData(userProfile);
        
        loginContainer.classList.remove('active');
        
        setTimeout(() => {
            loginContainer.style.display = 'none';
            dashboardWrapper.style.display = 'flex';
            dashboardWrapper.classList.add('visible');
            sidebar.classList.add('active');
            updateMainContentPadding();
            animateAllIndicators();
            checkAndSetAllAlerts();
        }, 500);
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        dashboardWrapper.classList.toggle('sidebar-open');
        updateMainContentPadding();
    });

    function updateMainContentPadding() {
        if (window.innerWidth > 768) {
            if (sidebar.classList.contains('active')) {
                mainContent.style.paddingLeft = '280px';
            } else {
                mainContent.style.paddingLeft = '0';
            }
        } else {
            mainContent.style.paddingLeft = '0';
        }
    }

    logoutBtn.addEventListener('click', () => {
        dashboardWrapper.classList.remove('visible', 'sidebar-open');
        sidebar.classList.remove('active');
        mainContent.style.paddingLeft = '0';
        setTimeout(() => {
            dashboardWrapper.style.display = 'none';
            loginContainer.style.display = 'block';
            loginContainer.classList.add('active');
            emailInput.value = '';
            
            currentUserEmail = 'gaurang@example.com';
            setProfileData(defaultProfile);
        }, 500);
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    addGutterBtn.addEventListener('click', () => {
        addGutterModal.style.display = 'block';
    });

    addGutterCloseBtn.addEventListener('click', () => {
        addGutterModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == addGutterModal) {
            addGutterModal.style.display = 'none';
        }
        if (event.target == editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    addGutterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('gutter-name').value;
        const address = document.getElementById('gutter-address').value;
        const ip = document.getElementById('gutter-ip').value;

        const collection = Math.floor(Math.random() * 100);
        const temp = Math.floor(Math.random() * 60) + 15;
        const gas = Math.floor(Math.random() * 100);

        gutterCount++;
        const newGutterData = {
            id: gutterCount,
            name: name,
            address: address,
            ip: ip,
            collection: collection,
            temperature: temp,
            gas: gas
        };
        gutterData.push(newGutterData);

        const newCard = createNewGutterCard(newGutterData);
        gutterGrid.appendChild(newCard);
        
        const deleteButton = newCard.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            const gutterId = newCard.dataset.id;
            const index = gutterData.findIndex(item => item.id == gutterId);
            if (index > -1) {
                gutterData.splice(index, 1);
            }
            newCard.remove();
        });

        animateIndicators(newCard);
        checkAndSetAlerts(newCard);

        addGutterForm.reset();
        addGutterModal.style.display = 'none';
    });
    
    function createNewGutterCard(data) {
        const card = document.createElement('div');
        card.classList.add('smart-gutter-card');
        card.setAttribute('data-id', data.id);
        card.setAttribute('data-collection-level', data.collection);
        card.setAttribute('data-temperature', data.temperature);
        card.setAttribute('data-gas-level', data.gas);

        card.innerHTML = `
            <div class="card-title">
                <i class="fas fa-trash-alt"></i>
                <span class="gutter-name">${data.name}</span>
                <button class="delete-btn"><i class="fas fa-times-circle"></i></button>
            </div>
            <div class="gutter-details">
                <div class="detail-item"><i class="fas fa-map-marker-alt"></i><span>${data.address}</span></div>
                <div class="detail-item"><i class="fas fa-network-wired"></i><span>${data.ip}</span></div>
            </div>
            <div class="status-indicators-new">
                <div class="status-item-new">
                    <div class="status-item-box">
                        <span class="status-label-inside">Water Level</span>
                        <div class="water-gauge">
                            <div class="water-tank">
                                <div class="water-level"></div>
                            </div>
                            <i class="fas fa-tint water-icon"></i>
                        </div>
                        <span class="status-value">${data.collection}%</span>
                    </div>
                </div>
                <div class="status-item-new">
                    <div class="status-item-box">
                        <span class="status-label-inside">Temperature</span>
                        <div class="thermometer-gauge">
                            <div class="thermometer-tube">
                                <div class="mercury"></div>
                            </div>
                            <i class="fas fa-thermometer-half temp-icon"></i>
                        </div>
                        <span class="status-value">${data.temperature}°C</span>
                    </div>
                </div>
                <div class="status-item-new">
                    <div class="status-item-box">
                        <span class="status-label-inside">Gas Levels</span>
                        <div class="gas-gauge">
                            <i class="fas fa-wind gas-icon"></i>
                            <div class="gas-fan"></div>
                        </div>
                        <span class="status-value">${data.gas}%</span>
                    </div>
                </div>
            </div>
            <div class="alert-box"></div>
        `;
        
        const deleteButton = card.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            const gutterId = card.dataset.id;
            const index = gutterData.findIndex(item => item.id == gutterId);
            if (index > -1) {
                gutterData.splice(index, 1);
            }
            card.remove();
        });
        
        return card;
    }

    function animateAllIndicators() {
        document.querySelectorAll('.smart-gutter-card').forEach(card => {
            animateIndicators(card);
        });
    }

    function animateIndicators(card) {
        const waterLevel = card.dataset.collectionLevel;
        const waterLevelEl = card.querySelector('.water-level');
        waterLevelEl.style.setProperty('--water-level', waterLevel + '%');
        
        const tempLevel = card.dataset.temperature;
        const mercuryEl = card.querySelector('.mercury');
        // Calculate the height of the mercury based on a max of 60°C
        const mercuryHeight = (tempLevel / 60) * 100;
        mercuryEl.style.setProperty('--mercury-level', mercuryHeight + '%');
        
        if (tempLevel >= 45) {
            mercuryEl.classList.add('high');
            mercuryEl.classList.remove('low');
        } else {
            mercuryEl.classList.add('low');
            mercuryEl.classList.remove('high');
        }

        const gasLevel = card.dataset.gasLevel;
        const gasGauge = card.querySelector('.gas-gauge');
        if (gasLevel >= 70) {
            gasGauge.classList.add('high-gas');
        } else {
            gasGauge.classList.remove('high-gas');
        }
    }

    function checkAndSetAllAlerts() {
        document.querySelectorAll('.smart-gutter-card').forEach(card => {
            checkAndSetAlerts(card);
        });
    }

    function checkAndSetAlerts(card) {
        const collectionLevel = parseInt(card.dataset.collectionLevel);
        const tempLevel = parseInt(card.dataset.temperature);
        const gasLevel = parseInt(card.dataset.gasLevel);
        const alertBox = card.querySelector('.alert-box');

        if (collectionLevel >= 80 || tempLevel >= 45 || gasLevel >= 70) {
            alertBox.innerHTML = '<i class="fas fa-exclamation-triangle"></i> DANGER! Stay Away';
            alertBox.classList.remove('safe');
            alertBox.classList.add('danger', 'active', 'animated');
        } else {
            alertBox.innerHTML = '<i class="fas fa-check-circle"></i> Safe to Go';
            alertBox.classList.remove('danger', 'animated');
            alertBox.classList.add('safe', 'active');
        }
    }

    downloadPdfBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(22);
        doc.text('Smart Manhole Monthly Report', 10, 20);
        doc.setFontSize(12);
        doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 30);
        doc.text(`Report Time: ${new Date().toLocaleTimeString()}`, 10, 36);
        
        let yPos = 50;
        
        if (gutterData.length === 0) {
            doc.text("No manhole data to report.", 10, yPos);
        } else {
            gutterData.forEach(gutter => {
                doc.setFontSize(16);
                doc.text(`Manhole: ${gutter.name}`, 10, yPos);
                yPos += 8;
                doc.setFontSize(12);
                doc.text(`- Address: ${gutter.address}`, 15, yPos);
                yPos += 7;
                doc.text(`- IP Address: ${gutter.ip}`, 15, yPos);
                yPos += 7;
                doc.text(`- Water Level: ${gutter.collection}%`, 15, yPos);
                yPos += 7;
                doc.text(`- Temperature: ${gutter.temperature}°C`, 15, yPos);
                yPos += 7;
                doc.text(`- Gas Levels: ${gutter.gas}%`, 15, yPos);
                yPos += 15;
            });
        }
        
        doc.save('Monthly_Manhole_Report.pdf');
    });

    editProfileBtn.addEventListener('click', () => {
        const currentProfile = userProfiles[currentUserEmail];
        
        editProfilePhotoPreview.src = currentProfile.photo;
        editProfileNameInput.value = currentProfile.name;
        editProfileLocationInput.value = currentProfile.location;
        editProfilePhoneInput.value = currentProfile.phone;
        
        editProfileModal.style.display = 'block';
    });

    editProfileCloseBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'none';
    });

    uploadPhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                editProfilePhotoPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const updatedName = editProfileNameInput.value;
        const updatedLocation = editProfileLocationInput.value;
        const updatedPhone = editProfilePhoneInput.value;
        const updatedPhoto = editProfilePhotoPreview.src;

        if (userProfiles[currentUserEmail]) {
            userProfiles[currentUserEmail].name = updatedName;
            userProfiles[currentUserEmail].location = updatedLocation;
            userProfiles[currentUserEmail].phone = updatedPhone;
            userProfiles[currentUserEmail].photo = updatedPhoto;
        } else {
            userProfiles[currentUserEmail] = {
                name: updatedName,
                location: updatedLocation,
                phone: updatedPhone,
                photo: updatedPhoto
            };
        }
        
        setProfileData(userProfiles[currentUserEmail]);
        editProfileModal.style.display = 'none';
    });

    dashboardWrapper.style.display = 'none';
    loginContainer.style.display = 'block';
    
    setTimeout(() => {
        loginContainer.classList.add('active');
    }, 100);

    window.addEventListener('resize', updateMainContentPadding);
});