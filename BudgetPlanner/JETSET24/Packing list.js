document.getElementById('generateList').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    const weather = document.getElementById('weather').value;
    const activities = Array.from(document.getElementById('activities').selectedOptions).map(option => option.value);

    const packingList = generatePackingList(destination, weather, activities);
    displayPackingList(packingList);
});

function generatePackingList(destination, weather, activities) {
    const list = [];

    // Base items based on destination
    const destinationItems = {
        beach: ['Swimsuit', 'Sunscreen', 'Beach towel'],
        mountains: ['Hiking boots', 'Warm clothing', 'Water bottle'],
        city: ['Comfortable shoes', 'Camera', 'City map'],
        countryside: ['Binoculars', 'Gardening gloves', 'Outdoor games'],
        desert: ['Sunglasses', 'Wide-brimmed hat', 'Light clothing'],
        cruise: ['Swimwear', 'Formal attire', 'Sunscreen'],
        tropical: ['Flip-flops', 'Beach cover-up', 'Snorkeling gear'],
        ski_resort: ['Ski gear', 'Warm socks', 'Ski goggles'],
        national_park: ['Backpack', 'Hiking gear', 'Camping supplies'],
        theme_park: ['Comfortable shoes', 'Portable charger', 'Snacks'],
        vineyard: ['Comfortable clothing', 'Wine glasses', 'Notebook'],
        historical_site: ['Guidebook', 'Comfortable shoes', 'Camera'],
        wildlife_safari: ['Binoculars', 'Camera', 'Safari hat'],
        fishing_trip: ['Fishing gear', 'Cooler', 'Fishing license'],
        spa_retreat: ['Relaxation clothes', 'Swimsuit', 'Skincare products']
    };

    list.push(...(destinationItems[destination] || []));

    // Weather specific items
    const weatherItems = {
        sunny: ['Sunglasses', 'Hat', 'Light clothing'],
        rainy: ['Umbrella', 'Waterproof jacket', 'Rain boots'],
        cold: ['Warm coat', 'Gloves', 'Thermal wear'],
        hot: ['Light clothing', 'Cooling towel', 'Sun hat'],
        windy: ['Windbreaker', 'Scarf'],
        foggy: ['Light jacket', 'Reflective gear'],
        snowy: ['Snow boots', 'Heavy jacket', 'Snow gear'],
    };

    list.push(...(weatherItems[weather] || []));

    // Activities specific items
    const activityItems = {
        swimming: ['Swimming goggles', 'Waterproof phone case'],
        hiking: ['Backpack', 'Snacks', 'Map'],
        sightseeing: ['Guidebook', 'Camera', 'Portable charger'],
        relaxing: ['Books or e-reader', 'Sunscreen'],
        skiing: ['Ski gear', 'Warm socks', 'Ski pass'],
        fishing: ['Fishing rods', 'Bait', 'Cooler'],
        camping: ['Tent', 'Sleeping bag', 'Portable stove'],
        cycling: ['Bicycle', 'Helmet', 'Water bottle'],
        golfing: ['Golf clubs', 'Golf balls', 'Tees'],
        yoga: ['Yoga mat', 'Comfortable clothing', 'Water bottle'],
        exploring: ['Camera', 'Comfortable shoes', 'Map'],
        partying: ['Party outfit', 'Accessories', 'Comfortable shoes'],
        shopping: ['Reusable bags', 'Comfortable shoes'],
        cooking: ['Cooking utensils', 'Recipe book'],
        picnicking: ['Picnic blanket', 'Food containers', 'Cooler'],
        wildlife_watching: ['Binoculars', 'Field guide', 'Camera'],
        scuba_diving: ['Scuba gear', 'Underwater camera', 'Snorkel'],
        road_tripping: ['Map', 'Snacks', 'Travel pillow'],
        volunteering: ['Comfortable clothing', 'Work gloves'],
        photography: ['Camera', 'Tripod', 'Extra batteries'],
        surfing: ['Surfboard', 'Wetsuit', 'Surf wax']
    };

    activities.forEach(activity => {
        list.push(...(activityItems[activity] || []));
    });

    return list;
}

function displayPackingList(list) {
    const packingListElement = document.getElementById('packingList');
    packingListElement.innerHTML = '';

    if (list.length === 0) {
        packingListElement.innerHTML = '<li>Please select options to generate your packing list.</li>';
        return;
    }

    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        packingListElement.appendChild(li);
    });
}
