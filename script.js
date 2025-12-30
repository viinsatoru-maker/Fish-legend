// ==================== GAME DATA ====================
const gameData = {
    coins: 500,
    level: 1,
    currentRod: 0,
    currentBait: 0,
    backpack: [],
    selectedFish: [],
    totalSellValue: 0,
    activePotions: [],
    totalFishCaught: 0,
    gachaStats: {
        totalSpins: 0,
        rodsObtained: []
    },
    village: {
        hutLevel: 1,
        assistants: 0,
        lastAssistantFish: 0
    },
    settings: {
        animations: true,
        notifications: true
    },
    aquarium: {
        basic: {},
        legendary: {},
        mythical: {},
        secret: {}
    }
};

// ==================== FISHING SPOTS ====================
const fishingSpots = [
    {
        id: 0,
        name: "Danau Biasa",
        background: "linear-gradient(135deg, #87CEEB, #1E90FF)",
        color: "#1E90FF",
        fishes: [
            // Basic (70% chance total)
            { id: 0, name: "Ikan Mas", rarity: "basic", chance: 25, price: 10, emoji: "🐟" },
            { id: 1, name: "Ikan Lele", rarity: "basic", chance: 20, price: 8, emoji: "🐠" },
            { id: 2, name: "Ikan Nila", rarity: "basic", chance: 15, price: 12, emoji: "🐡" },
            { id: 3, name: "Ikan Guppy", rarity: "basic", chance: 10, price: 6, emoji: "🐠" },
            
            // Legendary (25% chance total)
            { id: 4, name: "Ikan Hiu", rarity: "legendary", chance: 8, price: 50, emoji: "🦈" },
            { id: 5, name: "Ikan Pari", rarity: "legendary", chance: 7, price: 45, emoji: "🐠" },
            { id: 6, name: "Ikan Todak", rarity: "legendary", chance: 5, price: 55, emoji: "🐟" },
            { id: 7, name: "Ikan Salmon", rarity: "legendary", chance: 5, price: 60, emoji: "🐠" },
            
            // Mythical (4% chance total)
            { id: 8, name: "Ikan Naga", rarity: "mythical", chance: 2, price: 150, emoji: "🐉" },
            { id: 9, name: "Ikan Phoenix", rarity: "mythical", chance: 1.5, price: 180, emoji: "🐦‍🔥" },
            { id: 10, name: "Ikan Unicorn", rarity: "mythical", chance: 0.5, price: 200, emoji: "🦄" },
            
            // Secret (1% chance total)
            { id: 11, name: "Ikan Legenda", rarity: "secret", chance: 0.1, price: 1000, emoji: "🌟", spot: "danau" },
            { id: 12, name: "Ikan Kosmik", rarity: "secret", chance: 0.05, price: 2500, emoji: "🌌", spot: "danau" }
        ]
    },
    {
        id: 1, 
        name: "Kuil Suci",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#4B0082",
        fishes: [
            // Basic (60% chance total)
            { id: 100, name: "Ikan Suci", rarity: "basic", chance: 20, price: 15, emoji: "🐟" },
            { id: 101, name: "Ikan Monk", rarity: "basic", chance: 18, price: 12, emoji: "🐠" },
            { id: 102, name: "Ikan Bless", rarity: "basic", chance: 12, price: 18, emoji: "🐡" },
            { id: 103, name: "Ikan Zen", rarity: "basic", chance: 10, price: 14, emoji: "🐠" },
            
            // Legendary (30% chance total)
            { id: 104, name: "Ikan Divine", rarity: "legendary", chance: 10, price: 80, emoji: "✨" },
            { id: 105, name: "Ikan Angel", rarity: "legendary", chance: 8, price: 95, emoji: "🪽" },
            { id: 106, name: "Ikan Temple", rarity: "legendary", chance: 7, price: 110, emoji: "⛰️" },
            { id: 107, name: "Ikan Spirit", rarity: "legendary", chance: 5, price: 120, emoji: "👻" },
            
            // Mythical (8% chance total)
            { id: 108, name: "Ikan Deva", rarity: "mythical", chance: 4, price: 300, emoji: "💥" },
            { id: 109, name: "Ikan Buddha", rarity: "mythical", chance: 3, price: 450, emoji: "🦚" },
            { id: 110, name: "Ikan Nirvana", rarity: "mythical", chance: 1, price: 600, emoji: "🪷" },
            
            // Secret (2% chance total)
            { id: 111, name: "Rahata Turtle", rarity: "secret", chance: 0.1, price: 2500, emoji: "🐢", spot: "kuil" },
            { id: 112, name: "Mbah To Fish", rarity: "secret", chance: 0.05, price: 5000, emoji: "🫎", spot: "kuil" },
            { id: 113, name: "Raji Fish", rarity: "secret", chance: 0.01, price: 10000, emoji: "🪼", spot: "kuil" }
        ]
    },
    {
        id: 2,
        name: "Laut Dalam", 
        background: "linear-gradient(135deg, #00008B, #000080, #191970)",
        color: "#000080",
        fishes: [
            // Basic (50% chance total)
            { id: 200, name: "Ikan Teri", rarity: "basic", chance: 15, price: 20, emoji: "🐟" },
            { id: 201, name: "Ikan Tuna", rarity: "basic", chance: 15, price: 25, emoji: "🐠" },
            { id: 202, name: "Ikan Tongkol", rarity: "basic", chance: 10, price: 30, emoji: "🐡" },
            { id: 203, name: "Ikan Sarden", rarity: "basic", chance: 10, price: 18, emoji: "🐠" },
            
            // Legendary (35% chance total)
            { id: 204, name: "Ikan Paus", rarity: "legendary", chance: 10, price: 200, emoji: "🐋" },
            { id: 205, name: "Ikan Gurita", rarity: "legendary", chance: 9, price: 180, emoji: "🦑" },
            { id: 206, name: "Ikan Lumba", rarity: "legendary", chance: 8, price: 220, emoji: "🐬" },
            { id: 207, name: "Ikan Hiu Martil", rarity: "legendary", chance: 5, price: 250, emoji: "🦈" },
            
            // Mythical (12% chance total)
            { id: 208, name: "Ikan Naga Laut", rarity: "mythical", chance: 6, price: 800, emoji: "🦎" },
            { id: 209, name: "Ikan Poseidon", rarity: "mythical", chance: 4, price: 1200, emoji: "🔱" },
            { id: 210, name: "Ikan Siren", rarity: "mythical", chance: 2, price: 1500, emoji: "🧜‍♀️" },
            
            // Secret (3% chance total)
            { id: 211, name: "Kraken Raksasa", rarity: "secret", chance: 0.1, price: 8000, emoji: "🐙", spot: "laut" },
            { id: 212, name: "Leviathan", rarity: "secret", chance: 0.05, price: 20000, emoji: "🐍", spot: "laut" },
            { id: 213, name: "Cthulhu", rarity: "secret", chance: 0.001, price: 50000, emoji: "👹", spot: "laut" }
        ]
    },
    {
        id: 3,
        name: "Sungai Emas",
        background: "linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)",
        color: "#FFD700", 
        fishes: [
            // Basic (40% chance total)
            { id: 300, name: "Ikan Koi", rarity: "basic", chance: 15, price: 30, emoji: "🐟" },
            { id: 301, name: "Ikan Komet", rarity: "basic", chance: 12, price: 25, emoji: "🐠" },
            { id: 302, name: "Ikan Mas Koki", rarity: "basic", chance: 8, price: 35, emoji: "🐡" },
            { id: 303, name: "Ikan Kaca", rarity: "basic", chance: 5, price: 28, emoji: "🐠" },
            
            // Legendary (40% chance total)
            { id: 304, name: "Ikan Dragon", rarity: "legendary", chance: 10, price: 300, emoji: "🐲" },
            { id: 305, name: "Ikan Phoenix Gold", rarity: "legendary", chance: 9, price: 350, emoji: "🔥" },
            { id: 306, name: "Ikan Unicorn Gold", rarity: "legendary", chance: 8, price: 400, emoji: "🦄" },
            { id: 307, name: "Ikan Titan", rarity: "legendary", chance: 5, price: 450, emoji: "⚡" },
            
            // Mythical (15% chance total)
            { id: 308, name: "Ikan Emperor", rarity: "mythical", chance: 5, price: 1200, emoji: "🦂" },
            { id: 309, name: "Ikan Celestial", rarity: "mythical", chance: 4, price: 1800, emoji: "⭐" },
            { id: 310, name: "Ikan Eternal", rarity: "mythical", chance: 2, price: 2500, emoji: "💎" },
            
            // Secret (5% chance total)
            { id: 311, name: "Golden Leviathan", rarity: "secret", chance: 0.05, price: 10000, emoji: "🐉", spot: "sungai" },
            { id: 312, name: "Sun Fish", rarity: "secret", chance: 0.01, price: 15000, emoji: "☀️", spot: "sungai" },
            { id: 313, name: "Moster Locness", rarity: "secret", chance: 0.005, price: 50000, emoji: "🦕", spot: "sungai" }
        ]
    },

    // 🌌 SPOT LUAR ANGKASA
    {
        id: 4,
        name: "Luar Angkasa",
        background: "linear-gradient(135deg, #000033, #000066, #19003a, #330066)",
        color: "#6600cc",
        fishes: [
            // 🌟 BASIC (45% chance total)
            { id: 400, name: "Bintang Jatuh", rarity: "basic", chance: 18, price: 60, emoji: "⭐" },
            { id: 401, name: "Komet Kecil", rarity: "basic", chance: 15, price: 55, emoji: "☄️" },
            { id: 402, name: "Debu Kosmik", rarity: "basic", chance: 12, price: 50, emoji: "✨" },
            
            // 👽 LEGENDARY (35% chance total)  
            { id: 403, name: "Alien Fish", rarity: "legendary", chance: 5, price: 800, emoji: "👽" },
            { id: 404, name: "Blob Fish", rarity: "legendary", chance: 5, price: 750, emoji: "🐷" },
            
            // 🛸 MYTHICAL (15% chance total)
            { id: 405, name: "Ikan UFO", rarity: "mythical", chance: 0.5, price: 1000, emoji: "🛸" },
            { id: 406, name: "Ikan Gileg", rarity: "mythical", chance: 0.1, price: 2000, emoji: "🌠" },
            
            // 💫 SECRET (5% chance total)
            { id: 407, name: "404 Fish", rarity: "secret", chance: 0.001, price: 50000, emoji: "🦠", spot: "angkasa" },
            { id: 408, name: "1x1x1 Fish", rarity: "secret", chance: 0.0009, price: 100000, emoji: "💠", spot: "angkasa" },
        { id: 409, name: "Elshark gran maja", rarity: "???", chance: 0.0001, price: 1000000, emoji: "🎃", spot: "angkasa" }
        ]
    },
  
];

// ==================== EQUIPMENT DATA ====================
const rods = [
    { id: 0, name: "Pancingan Bambu", luck: 1, price: 0, owned: true },
    { id: 1, name: "Pancingan Besi", luck: 2, price: 350, owned: false },
    { id: 2, name: "Pancingan Emas", luck: 5, price: 700, owned: false },
    { id: 3, name: "Pancingan Platinum", luck: 10, price: 1000, owned: false },
    { id: 4, name: "Pancingan Legendaris", luck: 20, price: 3000, owned: false },
    { id: 5, name: "Pancingan Dragon", luck: 40, price: 6000, owned: false },
    { id: 6, name: "Pancingan Cosmic", luck: 80, price: 10000, owned: false },
    { id: 7, name: "Element Rod", luck: 120, price: 0, owned: false, unlocked: false, special: true },
    { id: 8, name: "Trident Rod", luck: 200, price: 0, owned: false, unlocked: false, special: true },
    { id: 9, name: "Galaxy Sword Rod", luck: 404, price: 440044, owned: false },
    { id: 10, name: "Tyo Rod", luck: 999, price: 999999, owned: false },
    { id: 11, name: "1x1x1 Rod", luck: 1111, price: 0, owned: false, unlocked: false, special: true, emoji: "🪬" }
];

const baits = [
    { id: 0, name: "Umpan Biasa", luck: 1, price: 0, owned: true },
    { id: 1, name: "Umpan Cacing", luck: 1.5, price: 200, owned: false },
    { id: 2, name: "Umpan Udang", luck: 2, price: 300, owned: false },
    { id: 3, name: "Umpan Ikan Kecil", luck: 5, price: 600, owned: false },
    { id: 4, name: "Umpan Ajaib", luck: 7, price: 700, owned: false },
    { id: 5, name: "Umpan Emas", luck: 15, price: 1500, owned: false },
    { id: 6, name: "Umpan Dark Matter", luck: 111, price: 22222, owned: false },
    { id: 7, name: "Umpan Singularity", luck: 125, price: 30000, owned: false },
  { id: 8, name: "Elshark Bait", luck: 150, price: 50000, owned: false }
];

const potions = [
    { id: 0, name: "Luck Potion x2", multiplier: 2, duration: 10, price: 400, emoji: "🧪" },
    { id: 1, name: "Luck Potion x3", multiplier: 3, duration: 8, price: 600, emoji: "🔮" },
    { id: 2, name: "Luck Potion x5", multiplier: 5, duration: 5, price: 1000, emoji: "💎" },
    { id: 3, name: "Luck Potion x10", multiplier: 10, duration: 3, price: 2000, emoji: "✨" },
    { id: 4, name: "Super Luck Potion x100", multiplier: 100, duration: 1, price: 20000, emoji: "🍺" }
];

const gachaRods = [
    { id: 100, name: "Wooden Enchant", luck: 1.2, rarity: "common", chance: 60, emoji: "🎣" },
    { id: 101, name: "Silver Enchant", luck: 2.0, rarity: "rare", chance: 25, emoji: "🥈" },
    { id: 102, name: "Dragon Enchant", luck: 4.0, rarity: "epic", chance: 10, emoji: "🐲" },
    { id: 103, name: "Legendary Enchant", luck: 8.0, rarity: "legendary", chance: 4, emoji: "⚡" },
    { id: 104, name: "Mythic Enchant", luck: 15.0, rarity: "mythical", chance: 1, emoji: "🌟" }
];

// ==================== QUEST SYSTEM ====================
const quests = [
    { 
        id: 1, 
        name: "Element Rod Quest", 
        desc: "Tangkap 2 ikan Secret di Kuil Suci", 
        target: 2, 
        progress: 0, 
        completed: false,
        reward: "Element Rod",
        type: "secret_kuil"
    },
    { 
        id: 2, 
        name: "Trident Rod Quest", 
        desc: "Tangkap 1 Secret di semua spot (Danau, Kuil, Laut, Sungai)", 
        target: 4, 
        progress: 0, 
        completed: false,
        reward: "Trident Rod",
        type: "secret_all_spots"
    },
    { 
        id: 3, 
        name: "1x1x1 Rod Quest", 
        desc: "Tangkap 5 ikan Secret di Luar Angkasa", 
        target: 5, 
        progress: 0, 
        completed: false,
        reward: "1x1x1 Rod",
        type: "secret_angkasa"
    }
];

// ==================== GAME SYSTEMS ====================
const weather = {
    current: "sunny",
    effects: {
        sunny: { luck: 1.0, text: "Cerah ☀️", color: "#FFD700" },
        rainy: { luck: 1.3, text: "Hujan 🌧️", color: "#4682B4" },
        stormy: { luck: 2, text: "Badai ⚡", color: "#4B0082" }
    }
};

let currentSpot = 0;
let isFishing = false;
let currentPullHandler = null;
let autoSellSettings = {
    basic: false,
    legendary: false
};
let caughtSecretSpots = {
    danau: false,
    kuil: false,
    laut: false,
    sungai: false,
    angkasa: false
};

// ==================== DOM ELEMENTS ====================
let coinsElement, levelElement, fishBtn, gachaBtn;
let backpackItems, shopItems, sellItems, sellTotal, sellBtn, sellAllBtn;
let resultModal, gachaModal;
let resultTitle, resultContent, gachaTitle, gachaContent;
let minigameIndicator;

// ==================== INITIALIZATION ====================
function initGame() {
    initializeDOMElements();
    
    if (!checkRequiredElements()) {
        setTimeout(initGame, 100);
        return;
    }
    
    loadGame();
    updateUI();
    setupEventListeners();
    loadBackpack();
    loadShop('rods');
    loadSellItems();
    createSpotButtons();
    createFishAnimation();
    startPotionTimer();
    startWeatherCycle();
    startAssistantTimer();
    
    // Load quests dan gacha rewards
    loadQuests();
    updateGachaTab();
    
    showNotification("🎮 Game loaded successfully!", "success");
}

function initializeDOMElements() {
    coinsElement = document.getElementById('coins');
    levelElement = document.getElementById('level');
    fishBtn = document.getElementById('fish-btn');
    gachaBtn = document.getElementById('gacha-btn');
    backpackItems = document.getElementById('backpack-items');
    shopItems = document.getElementById('shop-items');
    sellItems = document.getElementById('sell-items');
    sellTotal = document.getElementById('sell-total');
    sellBtn = document.getElementById('sell-btn');
    sellAllBtn = document.getElementById('sell-all-btn');
    resultModal = document.getElementById('result-modal');
    gachaModal = document.getElementById('gacha-modal');
    resultTitle = document.getElementById('result-title');
    resultContent = document.getElementById('result-content');
    gachaTitle = document.getElementById('gacha-title');
    gachaContent = document.getElementById('gacha-content');
    minigameIndicator = document.getElementById('minigame-indicator');
}

function checkRequiredElements() {
    const required = [
        coinsElement, levelElement, fishBtn, gachaBtn,
        backpackItems, shopItems, sellItems
    ];
    return required.every(element => element !== null);
}

// ==================== FISHING SYSTEM ====================
function startFishing() {
    if (isFishing) return;
    
    isFishing = true;
    fishBtn.disabled = true;
    fishBtn.textContent = "🎣 Casting...";
    
    const hook = document.querySelector('.hook');
    const fishingLine = document.querySelector('.fishing-line');
    
    if (hook && fishingLine) {
        hook.style.top = '200px';
        fishingLine.style.height = '200px';
    }
    
    setTimeout(() => {
        if (!isFishing) return;
        
        if (minigameIndicator) {
            minigameIndicator.style.display = 'block';
            startMinigame();
        }
        
        if (fishBtn) {
            fishBtn.textContent = "TARIK!";
            fishBtn.style.background = 'linear-gradient(to right, #ff0000, #ff6b6b)';
            fishBtn.disabled = false;
        }
        
        const autoCatchTimer = setTimeout(() => {
            if (isFishing) {
                finishFishing(getRandomFish(), false);
                cleanupFishing();
            }
        }, 3000);
        
        currentPullHandler = function() {
            clearTimeout(autoCatchTimer);
            const perfectCatch = minigameIndicator && minigameIndicator.style.display !== 'none' ? 
                checkMinigameResult() : false;
            const caughtFish = getRandomFish();
            finishFishing(caughtFish, perfectCatch);
            cleanupFishing();
        };
        
        if (fishBtn) {
            fishBtn.addEventListener('click', currentPullHandler);
        }
        
    }, 2000);
}

function startMinigame() {
    const needle = document.querySelector('.indicator-needle');
    if (needle) {
        needle.style.animation = 'needleSweep 1.5s infinite linear';
    }
}

function checkMinigameResult() {
    const needle = document.querySelector('.indicator-needle');
    const target = document.querySelector('.indicator-target');
    
    if (!needle || !target) return false;
    
    const needleRect = needle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    const needleCenter = needleRect.left + needleRect.width / 2;
    const targetLeft = targetRect.left;
    const targetRight = targetRect.right;
    
    return needleCenter >= targetLeft && needleCenter <= targetRight;
}

function cleanupFishing() {
    if (currentPullHandler && fishBtn) {
        fishBtn.removeEventListener('click', currentPullHandler);
        currentPullHandler = null;
    }
    
    if (minigameIndicator) {
        minigameIndicator.style.display = 'none';
    }
    
    const needle = document.querySelector('.indicator-needle');
    if (needle) {
        needle.style.animation = 'none';
    }
}

function getRandomFish() {
    const currentRod = rods[gameData.currentRod];
    const currentBait = baits[gameData.currentBait];
    const currentSpotData = fishingSpots[currentSpot];
    
    let totalLuck = currentRod.luck * currentBait.luck;
    
    // Apply gacha rod bonus
    const equippedGachaRod = gameData.gachaStats.rodsObtained.length > 0 ? 
        Math.max(...gameData.gachaStats.rodsObtained.map(id => 
            gachaRods.find(r => r.id === id)?.luck || 1
        )) : 1;
    totalLuck *= equippedGachaRod;
    
    // Apply village bonus
    totalLuck *= (1 + gameData.village.hutLevel * 0.1);
    
    if (gameData.activePotions.length > 0) {
        totalLuck *= gameData.activePotions[0].multiplier;
    }
    
    totalLuck *= weather.effects[weather.current].luck;
    
    // Luck effect on drop rates
    const luckBonus = Math.min(totalLuck, 10);
    
    const weightedFishes = currentSpotData.fishes.map(fish => {
        let finalChance = fish.chance;
        
        if (fish.rarity === "basic") {
            finalChance = Math.max(fish.chance / (1 + luckBonus * 0.1), 5);
        } 
        else if (fish.rarity === "legendary") {
            finalChance = fish.chance * (1 + luckBonus * 0.3);
        }
        else if (fish.rarity === "mythical") {
            finalChance = fish.chance * (1 + luckBonus * 0.5);
        }
        else if (fish.rarity === "secret") {
            finalChance = fish.chance * (1 + luckBonus * 0.8);
        }
        
        return {
            ...fish,
            finalChance: Math.max(finalChance, 0.1)
        };
    });
    
    let totalChance = weightedFishes.reduce((sum, fish) => sum + fish.finalChance, 0);
    const random = Math.random() * totalChance;
    let cumulativeChance = 0;
    
    for (const fish of weightedFishes) {
        cumulativeChance += fish.finalChance;
        if (random <= cumulativeChance) {
            return { ...fish };
        }
    }
    
    return { ...currentSpotData.fishes[0] };
}

function finishFishing(fish, perfectCatch = false) {
    isFishing = false;
    
    const hook = document.querySelector('.hook');
    const fishingLine = document.querySelector('.fishing-line');
    
    if (hook && fishingLine) {
        hook.style.top = '150px';
        fishingLine.style.height = '150px';
    }
    
    // Perfect catch bonus
    let priceMultiplier = 1;
    if (perfectCatch) {
        priceMultiplier = 1.5;
        showNotification("🎯 PERFECT CATCH! +50% Bonus", "success");
    }
    
    const finalPrice = Math.floor(fish.price * priceMultiplier);
    
    // Add to backpack
    gameData.backpack.push({
        ...fish,
        catchTime: Date.now(),
        perfectCatch: perfectCatch
    });
    
    gameData.totalFishCaught++;
    
    // UPDATE QUEST PROGRESS
    updateQuestProgress(fish);
    
    // Auto-sell check
    if (autoSellSettings[fish.rarity]) {
        gameData.coins += finalPrice;
        gameData.backpack.pop();
        showAutoSellNotification(fish, finalPrice);
    } else {
        showFishingResult(fish, finalPrice, perfectCatch);
    }
    
    // Update aquarium
    addToAquarium(fish);
    
    if (fishBtn) {
        fishBtn.textContent = "🎣 Mancing!";
        fishBtn.style.background = 'linear-gradient(to right, #ff8a00, #e52e71)';
        fishBtn.disabled = false;
    }
    
    updateUI();
    loadBackpack();
    loadSellItems();
}

// ==================== QUEST PROGRESS SYSTEM ====================
function updateQuestProgress(fish) {
    if (fish.rarity === "secret") {
        // Quest 1: Tangkap 2 secret di Kuil Suci
        if (fish.spot === "kuil") {
            const quest1 = quests.find(q => q.id === 1);
            if (quest1 && !quest1.completed) {
                quest1.progress++;
                if (quest1.progress >= quest1.target) {
                    quest1.completed = true;
                    completeQuest(quest1);
                }
            }
        }
        
        // Quest 2: Tangkap 1 secret di semua spot
        if (fish.spot && !caughtSecretSpots[fish.spot]) {
            caughtSecretSpots[fish.spot] = true;
            
            const quest2 = quests.find(q => q.id === 2);
            if (quest2 && !quest2.completed) {
                quest2.progress = Object.values(caughtSecretSpots).filter(Boolean).length;
                if (quest2.progress >= quest2.target) {
                    quest2.completed = true;
                    completeQuest(quest2);
                }
            }
        }
        
        // Quest 3: Tangkap 5 secret di Luar Angkasa
        if (fish.spot === "angkasa") {
            const quest3 = quests.find(q => q.id === 3);
            if (quest3 && !quest3.completed) {
                quest3.progress++;
                if (quest3.progress >= quest3.target) {
                    quest3.completed = true;
                    completeQuest(quest3);
                }
            }
        }
        
        loadQuests();
    }
}

function completeQuest(quest) {
    showNotification(`🎉 Quest "${quest.name}" completed! Reward: ${quest.reward}`, "success");
    
    // Handle special rewards
    if (quest.reward === "Element Rod") {
        const elementRod = rods.find(r => r.id === 7);
        if (elementRod) {
            elementRod.unlocked = true;
            elementRod.owned = true;
            gameData.currentRod = 7;
            showNotification("🔓 Element Rod unlocked and equipped! +120x Luck!", "success");
        }
    } else if (quest.reward === "Trident Rod") {
        const tridentRod = rods.find(r => r.id === 8);
        if (tridentRod) {
            tridentRod.unlocked = true;
            tridentRod.owned = true;
            gameData.currentRod = 8;
            showNotification("🔓 Trident Rod unlocked and equipped! +200x Luck!", "success");
        }
    } else if (quest.reward === "1x1x1 Rod") {
        const oneByOneRod = rods.find(r => r.id === 11);
        if (oneByOneRod) {
            oneByOneRod.unlocked = true;
            oneByOneRod.owned = true;
            gameData.currentRod = 11;
            showNotification("🔓 1x1x1 Rod unlocked and equipped! +1111x ULTIMATE LUCK!", "success");
        }
    }
    
    loadShop('rods');
    updateLuckDisplay();
}

function loadQuests() {
    const questsList = document.getElementById('quests-list');
    if (!questsList) return;
    
    questsList.innerHTML = '';
    
    quests.forEach(quest => {
        const questItem = document.createElement('div');
        questItem.className = `quest-item ${quest.completed ? 'completed' : ''}`;
        
        const progressPercent = Math.min((quest.progress / quest.target) * 100, 100);
        
        questItem.innerHTML = `
            <h4>${quest.name}</h4>
            <p>${quest.desc}</p>
            <div class="quest-progress">
                <div class="progress-bar" style="width: ${progressPercent}%"></div>
            </div>
            <p>Progress: ${quest.progress}/${quest.target}</p>
            <p><strong>Reward:</strong> ${quest.reward}</p>
            ${quest.completed ? '<div style="color: #00FF00;">✓ Completed</div>' : ''}
        `;
        
        questsList.appendChild(questItem);
    });
}

// ==================== LUCK DISPLAY SYSTEM ====================
function updateLuckDisplay() {
    const luckDisplay = document.getElementById('luck-display');
    if (!luckDisplay) return;
    
    const totalLuck = calculateTotalLuck();
    luckDisplay.innerHTML = `
        <div style="text-align: center; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 10px; margin: 10px 0;">
            <h4>🎯 Total Luck: ${totalLuck.toFixed(1)}x</h4>
            <div style="font-size: 0.9rem; text-align: left;">
                <div>🎣 Rod: ${rods[gameData.currentRod].name} (${rods[gameData.currentRod].luck}x)</div>
                <div>🪱 Bait: ${baits[gameData.currentBait].name} (${baits[gameData.currentBait].luck}x)</div>
                <div>🏠 Hut: +${gameData.village.hutLevel * 10}%</div>
                ${gameData.activePotions.length > 0 ? 
                    `<div>🧪 Potion: ${gameData.activePotions[0].name} (${gameData.activePotions[0].multiplier}x)</div>` : ''}
                <div>🌤️ Weather: ${weather.effects[weather.current].luck}x</div>
            </div>
        </div>
    `;
}

function calculateTotalLuck() {
    const currentRod = rods[gameData.currentRod];
    const currentBait = baits[gameData.currentBait];
    
    let totalLuck = currentRod.luck * currentBait.luck;
    
    // Apply gacha rod bonus
    const equippedGachaRod = gameData.gachaStats.rodsObtained.length > 0 ? 
        Math.max(...gameData.gachaStats.rodsObtained.map(id => 
            gachaRods.find(r => r.id === id)?.luck || 1
        )) : 1;
    totalLuck *= equippedGachaRod;
    
    // Apply village bonus
    totalLuck *= (1 + gameData.village.hutLevel * 0.1);
    
    if (gameData.activePotions.length > 0) {
        totalLuck *= gameData.activePotions[0].multiplier;
    }
    
    totalLuck *= weather.effects[weather.current].luck;
    
    return totalLuck;
}

// ==================== GACHA REWARDS LIST ====================
function loadGachaRewards() {
    const gachaRewards = document.getElementById('gacha-rewards');
    if (!gachaRewards) return;
    
    gachaRewards.innerHTML = '';
    
    gachaRods.forEach(rod => {
        const rewardItem = document.createElement('div');
        rewardItem.className = 'gacha-reward-item';
        const isObtained = gameData.gachaStats.rodsObtained.includes(rod.id);
        
        rewardItem.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; margin: 5px 0;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.5rem;">${rod.emoji}</span>
                    <div>
                        <div style="font-weight: bold; color: ${getRarityColor(rod.rarity)}">${rod.name}</div>
                        <div style="font-size: 0.8rem;">Luck: +${rod.luck}x</div>
                    </div>
                </div>
                <div style="color: ${isObtained ? '#00FF00' : '#FF6B6B'}; font-size: 0.9rem;">
                    ${isObtained ? '✓ Obtained' : 'Not Obtained'}
                </div>
            </div>
        `;
        
        gachaRewards.appendChild(rewardItem);
    });
}

// ==================== INVENTORY MANAGEMENT ====================
function loadBackpack() {
    if (!backpackItems) return;
    
    if (gameData.backpack.length === 0) {
        backpackItems.innerHTML = '<p class="empty-message">Belum ada ikan di backpack</p>';
        return;
    }
    
    backpackItems.innerHTML = '';
    
    gameData.backpack.forEach((fish, index) => {
        const fishCard = document.createElement('div');
        fishCard.className = 'item-card';
        
        let rarityClass = '';
        switch(fish.rarity) {
            case 'basic': rarityClass = 'rarity-basic'; break;
            case 'legendary': rarityClass = 'rarity-legendary'; break;
            case 'mythical': rarityClass = 'rarity-mythical'; break;
            case 'secret': rarityClass = 'rarity-secret'; break;
        }
        
        fishCard.innerHTML = `
            <div class="fish-emoji">${fish.emoji}</div>
            <div class="item-name">${fish.name}</div>
            <div class="item-rarity ${rarityClass}">${fish.rarity.toUpperCase()}</div>
            <div class="item-price">${fish.price} koin</div>
            ${fish.perfectCatch ? '<div style="color: #FFD700; font-size: 0.8rem;">🎯 Perfect</div>' : ''}
        `;
        
        backpackItems.appendChild(fishCard);
    });
}

function sortBackpack(sortType) {
    switch(sortType) {
        case 'rarity':
            gameData.backpack.sort((a, b) => {
                const rarityOrder = { 'secret': 4, 'mythical': 3, 'legendary': 2, 'basic': 1 };
                return rarityOrder[b.rarity] - rarityOrder[a.rarity];
            });
            break;
        case 'price':
            gameData.backpack.sort((a, b) => b.price - a.price);
            break;
    }
    loadBackpack();
}

// ==================== SHOP SYSTEM ====================
function loadShop(category) {
    if (!shopItems) return;
    
    shopItems.innerHTML = '';
    
    let items = [];
    if (category === 'rods') {
        items = rods.filter(rod => {
            if (rod.special) return rod.unlocked;
            return true;
        });
    }
    else if (category === 'baits') items = baits;
    else if (category === 'potions') items = potions;
    else if (category === 'upgrades') items = getVillageUpgrades();
    
    if (items.length === 0) {
        shopItems.innerHTML = '<p class="empty-message">Tidak ada item</p>';
        return;
    }
    
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        let isOwned = false, canAfford = false, isEquipped = false;
        
        if (category === 'potions') {
            canAfford = gameData.coins >= item.price;
            isOwned = false;
        } else if (category === 'upgrades') {
            canAfford = gameData.coins >= item.price;
            isOwned = item.owned || false;
        } else {
            isOwned = item.owned;
            canAfford = gameData.coins >= item.price;
            isEquipped = category === 'rods' ? item.id === gameData.currentRod : item.id === gameData.currentBait;
        }
        
        let buttonText = 'Beli';
        let isDisabled = false;
        
        if (category === 'potions') {
            buttonText = canAfford ? 'Beli & Pakai' : 'Koin Tidak Cukup';
            isDisabled = !canAfford;
        } else if (category === 'upgrades') {
            buttonText = canAfford ? 'Beli' : 'Koin Tidak Cukup';
            isDisabled = !canAfford || isOwned;
        } else {
            if (isOwned) {
                buttonText = isEquipped ? 'Sedang Digunakan' : 'Gunakan';
                isDisabled = isEquipped;
            } else {
                if (item.special && !item.unlocked) {
                    buttonText = 'Locked (Complete Quest)';
                    isDisabled = true;
                } else {
                    buttonText = canAfford ? 'Beli' : 'Koin Tidak Cukup';
                    isDisabled = !canAfford;
                }
            }
        }
        
        if (category === 'potions') {
            itemCard.innerHTML = `
                <div class="item-name">${item.emoji} ${item.name}</div>
                <div class="item-luck">${item.multiplier}x Luck Boost</div>
                <div class="item-duration">${item.duration} menit</div>
                <div class="item-price">${item.price} koin</div>
                <button class="buy-btn" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>
            `;
        } else if (category === 'upgrades') {
            itemCard.innerHTML = `
                <div class="item-name">${item.emoji} ${item.name}</div>
                <div class="item-luck">${item.desc}</div>
                <div class="item-price">${item.price} koin</div>
                <button class="buy-btn" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>
            `;
        } else {
            const emoji = item.emoji || '🎣';
            itemCard.innerHTML = `
                <div class="item-name">${emoji} ${item.name} ${item.special ? '🌟' : ''}</div>
                <div class="item-luck">+${item.luck}x Luck</div>
                <div class="item-price">${item.price > 0 ? item.price + ' koin' : 'Quest Reward'}</div>
                <button class="buy-btn" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>
            `;
        }
        
        const buyBtn = itemCard.querySelector('.buy-btn');
        
        if (category === 'potions' && canAfford) {
            buyBtn.addEventListener('click', () => buyPotion(item));
        } else if (category === 'upgrades' && canAfford) {
            buyBtn.addEventListener('click', () => buyUpgrade(item.type));
        } else if (!isOwned && canAfford && !item.special) {
            buyBtn.addEventListener('click', () => buyItem(item, category));
        } else if (isOwned && !isEquipped) {
            buyBtn.addEventListener('click', () => equipItem(item, category));
        }
        
        shopItems.appendChild(itemCard);
    });
    
    updateLuckDisplay();
}

function getVillageUpgrades() {
    return [
        {
            type: 'hut',
            name: 'Fishing Hut Upgrade',
            desc: `Level ${gameData.village.hutLevel + 1} (+10% Luck)`,
            price: gameData.village.hutLevel * 1000 + 1000,
            owned: false,
            emoji: '🏠'
        },
        {
            type: 'assistant',
            name: 'Hire Assistant',
            desc: 'Auto-fish every 30 seconds',
            price: 2000,
            owned: gameData.village.assistants >= 3,
            emoji: '👥'
        }
    ];
}

function buyItem(item, category) {
    if (gameData.coins < item.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= item.price;
    item.owned = true;
    
    if (category === 'rods') {
        equipItem(item, category);
    }
    
    showNotification(`✅ Berhasil membeli ${item.name}!`, "success");
    updateUI();
    loadShop(category);
}

function equipItem(item, category) {
    if (category === 'rods') {
        gameData.currentRod = item.id;
    } else if (category === 'baits') {
        gameData.currentBait = item.id;
    }
    
    showNotification(`🎣 Menggunakan ${item.name}!`, "success");
    loadShop(category);
    updateLuckDisplay();
}

function buyPotion(potion) {
    if (gameData.coins < potion.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= potion.price;
    gameData.activePotions.push({
        ...potion,
        startTime: Date.now()
    });
    
    showNotification(`🧪 Menggunakan ${potion.name}!`, "success");
    updatePotionDisplay();
    updateUI();
    loadShop('potions');
    updateLuckDisplay();
}

function buyUpgrade(upgradeType) {
    const upgrades = getVillageUpgrades();
    const upgrade = upgrades.find(u => u.type === upgradeType);
    
    if (!upgrade || gameData.coins < upgrade.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= upgrade.price;
    
    switch(upgradeType) {
        case 'hut':
            gameData.village.hutLevel++;
            showNotification(`🏠 Fishing Hut upgraded to level ${gameData.village.hutLevel}!`, "success");
            break;
        case 'assistant':
            if (gameData.village.assistants < 3) {
                gameData.village.assistants++;
                showNotification(`👥 Assistant hired! Total: ${gameData.village.assistants}`, "success");
            }
            break;
    }
    
    updateUI();
    loadShop('upgrades');
    loadVillage();
    updateLuckDisplay();
}

// ==================== SELL SYSTEM ====================
function loadSellItems() {
    if (!sellItems || !sellTotal || !sellBtn || !sellAllBtn) return;
    
    if (gameData.backpack.length === 0) {
        sellItems.innerHTML = '<p class="empty-message">Tidak ada ikan untuk dijual</p>';
        sellBtn.disabled = true;
        sellAllBtn.disabled = true;
        return;
    }
    
    sellItems.innerHTML = '';
    gameData.selectedFish = [];
    gameData.totalSellValue = 0;
    
    gameData.backpack.forEach((fish, index) => {
        const fishCard = document.createElement('div');
        fishCard.className = 'item-card';
        fishCard.dataset.index = index;
        
        let rarityClass = '';
        switch(fish.rarity) {
            case 'basic': rarityClass = 'rarity-basic'; break;
            case 'legendary': rarityClass = 'rarity-legendary'; break;
            case 'mythical': rarityClass = 'rarity-mythical'; break;
            case 'secret': rarityClass = 'rarity-secret'; break;
        }
        
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        
        fishCard.innerHTML = `
            <div class="fish-emoji">${fish.emoji}</div>
            <div class="item-name">${fish.name}</div>
            <div class="item-rarity ${rarityClass}">${fish.rarity}</div>
            <div class="item-price">${finalPrice} koin</div>
            ${fish.perfectCatch ? '<div style="color: #FFD700; font-size: 0.7rem;">🎯 +50%</div>' : ''}
            <input type="checkbox" class="fish-checkbox">
        `;
        
        const checkbox = fishCard.querySelector('.fish-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                gameData.selectedFish.push(index);
                gameData.totalSellValue += finalPrice;
            } else {
                const idx = gameData.selectedFish.indexOf(index);
                if (idx > -1) {
                    gameData.selectedFish.splice(idx, 1);
                    gameData.totalSellValue -= finalPrice;
                }
            }
            
            sellTotal.textContent = gameData.totalSellValue;
            sellBtn.disabled = gameData.selectedFish.length === 0;
        });
        
        sellItems.appendChild(fishCard);
    });
    
    sellTotal.textContent = gameData.totalSellValue;
    sellBtn.disabled = true;
    sellAllBtn.disabled = false;
}

function sellSelectedFish() {
    if (gameData.selectedFish.length === 0) return;
    
    gameData.selectedFish.sort((a, b) => b - a);
    
    let totalSold = 0;
    gameData.selectedFish.forEach(index => {
        const fish = gameData.backpack[index];
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        totalSold += finalPrice;
        gameData.backpack.splice(index, 1);
    });
    
    gameData.coins += totalSold;
    gameData.selectedFish = [];
    gameData.totalSellValue = 0;
    
    updateUI();
    loadBackpack();
    loadSellItems();
    
    showNotification(`💰 Berhasil menjual ${gameData.selectedFish.length} ikan dan mendapatkan ${totalSold} koin!`, "success");
}

function sellAllFish() {
    if (gameData.backpack.length === 0) return;
    
    let totalSold = 0;
    gameData.backpack.forEach(fish => {
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        totalSold += finalPrice;
    });
    
    gameData.coins += totalSold;
    gameData.backpack = [];
    
    updateUI();
    loadBackpack();
    loadSellItems();
    
    showNotification(`💰 Berhasil menjual semua ikan dan mendapatkan ${totalSold} koin!`, "success");
}

// ==================== GACHA SYSTEM ====================
function spinGacha() {
    if (gameData.coins < 500) {
        showNotification("❌ Koin tidak cukup! Butuh 500 koin", "error");
        return;
    }
    
    gameData.coins -= 500;
    gameData.gachaStats.totalSpins++;
    
    const random = Math.random() * 100;
    let cumulativeChance = 0;
    let obtainedRod = null;
    
    for (const rod of gachaRods) {
        cumulativeChance += rod.chance;
        if (random <= cumulativeChance) {
            obtainedRod = rod;
            break;
        }
    }
    
    if (!obtainedRod) {
        obtainedRod = gachaRods[0];
    }
    
    if (!gameData.gachaStats.rodsObtained.includes(obtainedRod.id)) {
        gameData.gachaStats.rodsObtained.push(obtainedRod.id);
    }
    
    showGachaResult(obtainedRod);
    updateUI();
    updateGachaTab();
}

function showGachaResult(rod) {
    if (!gachaModal || !gachaTitle || !gachaContent) return;
    
    gachaTitle.textContent = "Hasil Gacha!";
    gachaContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin: 20px 0;">${rod.emoji}</div>
            <h3 style="color: ${getRarityColor(rod.rarity)}">${rod.name}</h3>
            <p>Rarity: ${rod.rarity.toUpperCase()}</p>
            <p>Luck Bonus: +${rod.luck}x</p>
            <p style="margin-top: 20px; font-size: 1.2rem;">🎉 Selamat! Rod baru telah ditambahkan!</p>
        </div>
    `;
    
    gachaModal.style.display = 'block';
}

function updateGachaStats() {
    const totalSpins = document.getElementById('total-spins');
    const rodsObtained = document.getElementById('rods-obtained');
    
    if (totalSpins) totalSpins.textContent = gameData.gachaStats.totalSpins;
    if (rodsObtained) rodsObtained.textContent = gameData.gachaStats.rodsObtained.length;
}

function updateGachaTab() {
    updateGachaStats();
    loadGachaRewards();
    updateLuckDisplay();
}

function getRarityColor(rarity) {
    switch(rarity) {
        case 'common': return '#87CEEB';
        case 'rare': return '#00FF00';
        case 'epic': return '#FF69B4';
        case 'legendary': return '#FFD700';
        case 'mythical': return '#FF0000';
        default: return '#FFFFFF';
    }
}

// ==================== AQUARIUM SYSTEM ====================
function loadAquarium() {
    updateAquariumStats();
    
    loadFishTank('basic', 'basic-tank');
    loadFishTank('legendary', 'legendary-tank');
    loadFishTank('mythical', 'mythical-tank');
    loadFishTank('secret', 'secret-tank');
}

function loadFishTank(rarity, tankId) {
    const tank = document.getElementById(tankId);
    if (!tank) return;
    
    tank.innerHTML = '<h4>' + rarity.charAt(0).toUpperCase() + rarity.slice(1) + ' Fish</h4>';
    
    const fishInTank = gameData.aquarium[rarity];
    
    if (Object.keys(fishInTank).length === 0) {
        tank.innerHTML += '<div class="empty-tank">Belum ada ikan</div>';
        return;
    }
    
    Object.keys(fishInTank).forEach(fishId => {
        const fish = getAllFishes().find(f => f.id == fishId);
        if (fish) {
            const fishElement = document.createElement('div');
            fishElement.className = 'fish-in-tank';
            fishElement.title = `${fish.name} (${fishInTank[fishId]}x)`;
            fishElement.textContent = fish.emoji;
            tank.appendChild(fishElement);
        }
    });
}

function addToAquarium(fish) {
    const rarity = fish.rarity;
    if (!gameData.aquarium[rarity]) {
        gameData.aquarium[rarity] = {};
    }
    
    if (!gameData.aquarium[rarity][fish.id]) {
        gameData.aquarium[rarity][fish.id] = 0;
    }
    
    gameData.aquarium[rarity][fish.id]++;
    updateAquariumStats();
    loadAquarium();
}

function updateAquariumStats() {
    const speciesCount = document.getElementById('species-count');
    const totalSpecies = document.getElementById('total-species');
    const collectionPercent = document.getElementById('collection-percent');
    
    if (!speciesCount || !totalSpecies || !collectionPercent) return;
    
    const totalCollected = Object.values(gameData.aquarium).reduce((total, rarity) => {
        return total + Object.keys(rarity).length;
    }, 0);
    
    const totalPossible = getAllFishes().length;
    const percent = Math.round((totalCollected / totalPossible) * 100);
    
    speciesCount.textContent = totalCollected;
    totalSpecies.textContent = totalPossible;
    collectionPercent.textContent = percent + '%';
}

function getAllFishes() {
    return fishingSpots.flatMap(spot => spot.fishes);
}

// ==================== VILLAGE SYSTEM ====================
function loadVillage() {
    const assistantCount = document.getElementById('assistant-count');
    const hutLevel = document.getElementById('hut-level');
    
    if (assistantCount) assistantCount.textContent = gameData.village.assistants;
    if (hutLevel) hutLevel.textContent = gameData.village.hutLevel;
}

function startAssistantTimer() {
    setInterval(() => {
        if (gameData.village.assistants > 0 && !isFishing) {
            const now = Date.now();
            if (now - gameData.village.lastAssistantFish > 30000) {
                gameData.village.lastAssistantFish = now;
                assistantFish();
            }
        }
    }, 5000);
}

function assistantFish() {
    const assistants = gameData.village.assistants;
    for (let i = 0; i < assistants; i++) {
        setTimeout(() => {
            const fish = getRandomFish();
            gameData.backpack.push({
                ...fish,
                catchTime: Date.now(),
                perfectCatch: false
            });
            
            gameData.totalFishCaught++;
            addToAquarium(fish);
            
            if (autoSellSettings[fish.rarity]) {
                gameData.coins += fish.price;
                gameData.backpack.pop();
            }
            
            showNotification(`👥 Assistant caught: ${fish.emoji} ${fish.name}`, "info");
            updateUI();
            loadBackpack();
        }, i * 1000);
    }
}

// ==================== SPOT SYSTEM ====================
function createSpotButtons() {
    const spotContainer = document.getElementById('spot-buttons');
    if (!spotContainer) return;
    
    spotContainer.innerHTML = '';
    
    fishingSpots.forEach(spot => {
        const spotBtn = document.createElement('button');
        spotBtn.className = 'spot-btn';
        spotBtn.setAttribute('data-spot', spot.id);
        spotBtn.textContent = spot.name;
        spotBtn.style.background = spot.id === currentSpot ? '#FFD700' : spot.color;
        spotBtn.style.color = spot.id === currentSpot ? '#000' : '#fff';
        
        spotBtn.addEventListener('click', () => switchFishingSpot(spot.id));
        spotContainer.appendChild(spotBtn);
    });
}

function switchFishingSpot(spotId) {
    currentSpot = spotId;
    const spot = fishingSpots[spotId];
    
    document.body.style.background = spot.background;
    updateSpotButtons();
    updateSpotDisplay();
    createFishAnimation();
    
    showNotification(`🎣 Pindah ke ${spot.name}`, "success");
}

function updateSpotButtons() {
    const spotButtons = document.querySelectorAll('.spot-btn');
    spotButtons.forEach(btn => {
        const spotId = parseInt(btn.getAttribute('data-spot'));
        if (spotId === currentSpot) {
            btn.style.background = '#FFD700';
            btn.style.color = '#000';
        } else {
            btn.style.background = fishingSpots[spotId].color;
            btn.style.color = '#fff';
        }
    });
}

function updateSpotDisplay() {
    const spotDisplay = document.getElementById('spot-display');
    if (!spotDisplay) return;
    
    const spot = fishingSpots[currentSpot];
    spotDisplay.innerHTML = `<span>📍 ${spot.name}</span>`;
}

function updateWeatherDisplay() {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherDisplay) return;
    
    const currentWeather = weather.effects[weather.current];
    weatherDisplay.innerHTML = `
        <span>${currentWeather.text.split(' ')[1]}</span>
        <span>${currentWeather.text.split(' ')[0]}</span>
    `;
    weatherDisplay.style.color = currentWeather.color;
}

// ==================== ANIMATION SYSTEM ====================
function createFishAnimation() {
    const fishDisplay = document.getElementById('fish-display');
    if (!fishDisplay) return;
    
    fishDisplay.innerHTML = '';
    
    const currentSpotData = fishingSpots[currentSpot];
    
    for (let i = 0; i < 8; i++) {
        const fish = document.createElement('div');
        const fishData = currentSpotData.fishes[i % currentSpotData.fishes.length];
        fish.className = `fish`;
        
        let fishColor = '#87CEEB';
        if (fishData.rarity === 'legendary') fishColor = '#FFD700';
        if (fishData.rarity === 'mythical') fishColor = '#FF69B4';
        if (fishData.rarity === 'secret') fishColor = '#00FFFF';
        
        fish.style.color = fishColor;
        
        const top = Math.random() * 150 + 50;
        const delay = Math.random() * 15;
        const speed = 8 + Math.random() * 12;
        
        fish.style.top = `${top}px`;
        fish.style.animation = `swim ${speed}s infinite linear`;
        fish.style.animationDelay = `${delay}s`;
        fish.textContent = fishData.emoji;
        
        fishDisplay.appendChild(fish);
    }
}

// ==================== UI UPDATES ====================
function updateUI() {
    if (coinsElement) coinsElement.textContent = gameData.coins;
    if (levelElement) levelElement.textContent = gameData.level;
    
    if (gachaBtn) {
        gachaBtn.disabled = gameData.coins < 500;
    }
}

function updatePotionDisplay() {
    const activeEffects = document.getElementById('active-effects');
    if (!activeEffects) return;
    
    activeEffects.innerHTML = '';
    
    gameData.activePotions.forEach(potion => {
        const effectItem = document.createElement('div');
        effectItem.className = 'effect-item';
        effectItem.innerHTML = `
            <div>${potion.emoji} ${potion.name}</div>
            <div>${potion.duration}m remaining</div>
        `;
        activeEffects.appendChild(effectItem);
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab) tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        if (pane) pane.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    const activePane = document.getElementById(tabId);
    
    if (activeTab) activeTab.classList.add('active');
    if (activePane) activePane.classList.add('active');
    
    if (tabId === 'sell') {
        loadSellItems();
    } else if (tabId === 'gacha') {
        updateGachaTab();
    } else if (tabId === 'quests') {
        loadQuests();
    } else if (tabId === 'aquarium') {
        loadAquarium();
    } else if (tabId === 'village') {
        loadVillage();
    }
}

function switchCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    loadShop(category);
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = "info") {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.3s ease';
        setTimeout(() => {
            if (container.contains(notification)) {
                container.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showFishingResult(fish, price, perfectCatch = false) {
    if (!resultModal || !resultTitle || !resultContent) return;
    
    resultTitle.textContent = perfectCatch ? "🎯 PERFECT CATCH!" : "Ikan Tertangkap!";
    
    let rarityColor = '#87CEEB';
    switch(fish.rarity) {
        case 'legendary': rarityColor = '#FFD700'; break;
        case 'mythical': rarityColor = '#FF69B4'; break;
        case 'secret': rarityColor = '#00FFFF'; break;
    }
    
    resultContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin: 20px 0;">${fish.emoji}</div>
            <h3 style="color: ${rarityColor}">${fish.name}</h3>
            <p>Rarity: <span style="color: ${rarityColor}">${fish.rarity.toUpperCase()}</span></p>
            <p>Value: ${price} koin</p>
            ${perfectCatch ? '<p style="color: #FFD700;">🎯 Perfect Catch Bonus: +50%</p>' : ''}
            <p style="margin-top: 20px; font-size: 1.2rem;">Ikan telah ditambahkan ke backpack!</p>
        </div>
    `;
    
    resultModal.style.display = 'block';
    
    if (fish.rarity === 'mythical') {
        showNotification(`🎉 WOW! Mythical ${fish.name} tertangkap!`, "success");
    } else if (fish.rarity === 'secret') {
        showNotification(`🌟 LEGENDARY! ${fish.name} tertangkap!`, "success");
    }
}

function showAutoSellNotification(fish, price) {
    showNotification(`💰 Auto-sold: ${fish.emoji} ${fish.name} for ${price} coins`, "info");
}

// ==================== TIMERS & SYSTEMS ====================
function startPotionTimer() {
    setInterval(() => {
        if (gameData.activePotions.length > 0) {
            const potion = gameData.activePotions[0];
            potion.duration--;
            
            if (potion.duration <= 0) {
                gameData.activePotions = [];
                updatePotionDisplay();
                showNotification("⏰ Efek potion sudah habis!", "info");
            } else {
                updatePotionDisplay();
            }
        }
    }, 60000);
}

function startWeatherCycle() {
    changeWeather();
    setInterval(() => {
        changeWeather();
    }, 300000); // 5 menit
}

function changeWeather() {
    const weatherTypes = Object.keys(weather.effects);
    const randomIndex = Math.floor(Math.random() * weatherTypes.length);
    weather.current = weatherTypes[randomIndex];
    updateWeatherDisplay();
    showNotification(`🌤️ Cuaca berubah: ${weather.effects[weather.current].text}`, "info");
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    if (fishBtn) fishBtn.addEventListener('click', startFishing);
    if (gachaBtn) gachaBtn.addEventListener('click', spinGacha);
    
    // Tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            switchCategory(category);
        });
    });
    
    // Close modal buttons
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });
    
    // Window click untuk close modal
    window.addEventListener('click', (e) => {
        if (resultModal && e.target === resultModal) resultModal.style.display = 'none';
        if (gachaModal && e.target === gachaModal) gachaModal.style.display = 'none';
    });
    
    // Sell buttons
    if (sellBtn) sellBtn.addEventListener('click', sellSelectedFish);
    if (sellAllBtn) sellAllBtn.addEventListener('click', sellAllFish);
    
    // Inventory controls
    const sortRarity = document.getElementById('sort-rarity');
    const sortPrice = document.getElementById('sort-price');
    
    if (sortRarity) sortRarity.addEventListener('click', () => sortBackpack('rarity'));
    if (sortPrice) sortPrice.addEventListener('click', () => sortBackpack('price'));
    
    // Auto-sell toggles
    const autoSellBasic = document.getElementById('auto-sell-basic');
    const autoSellLegendary = document.getElementById('auto-sell-legendary');
    
    if (autoSellBasic) autoSellBasic.addEventListener('change', (e) => toggleAutoSell('basic', e.target.checked));
    if (autoSellLegendary) autoSellLegendary.addEventListener('change', (e) => toggleAutoSell('legendary', e.target.checked));
    
    // Settings
    const animations = document.getElementById('animations');
    const notifications = document.getElementById('notifications');
    
    if (animations) animations.addEventListener('change', (e) => updateSetting('animations', e.target.checked));
    if (notifications) notifications.addEventListener('change', (e) => updateSetting('notifications', e.target.checked));
}

function toggleAutoSell(rarity, enabled) {
    autoSellSettings[rarity] = enabled;
    showNotification(`⚡ Auto-sell ${rarity}: ${enabled ? 'ON' : 'OFF'}`, "info");
}

function updateSetting(setting, value) {
    gameData.settings[setting] = value;
}

// ==================== SAVE/LOAD SYSTEM ====================
function saveGame() {
    const saveData = {
        gameData: gameData,
        rods: rods,
        baits: baits,
        currentSpot: currentSpot,
        quests: quests,
        caughtSecretSpots: caughtSecretSpots
    };
    localStorage.setItem('fishLegSave', JSON.stringify(saveData));
}

function loadGame() {
    try {
        const save = localStorage.getItem('fishLegSave');
        if (save) {
            const saveData = JSON.parse(save);
            Object.assign(gameData, saveData.gameData);
            Object.assign(rods, saveData.rods);
            Object.assign(baits, saveData.baits);
            Object.assign(quests, saveData.quests || quests);
            currentSpot = saveData.currentSpot || 0;
            caughtSecretSpots = saveData.caughtSecretSpots || {
                danau: false,
                kuil: false,
                laut: false,
                sungai: false,
                angkasa: false
            };
        }
    } catch (error) {
        console.error("Error loading save:", error);
    }
}

// ==================== START GAME ====================
window.addEventListener('DOMContentLoaded', function() {
    try {
        initGame();
        setInterval(saveGame, 30000);
    } catch (error) {
        console.error("Game initialization error:", error);
        showNotification("❌ Game initialization failed. Please refresh.", "error");
    }
});