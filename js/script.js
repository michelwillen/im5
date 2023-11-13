const portfolio = document.querySelector('.portfolio');
// const sortButton = document.querySelector('.sort-button');

let ascendingOrder = true; // A flag to track the sorting order

sortItemsByName();

function initializeItems() {
    portfolio.innerHTML = '';
        podcastsData.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.setAttribute('data-verlag', item.verlag);
            itemElement.setAttribute('data-thema', item.thema);
            itemElement.setAttribute('data-dauer', item.dauer);
            itemElement.setAttribute('data-art', item.art);

            const itemName = document.createElement('h3');
            itemName.classList.add('name');
            itemName.textContent = item.name; 

            const itemInfo = document.createElement('p');
            itemInfo.classList.add('info');
            itemInfo.innerHTML = item.info;

            const itemLink = document.createElement('a');
            itemLink.classList.add('link');
            itemLink.textContent = 'Jetzt hören';
            itemLink.setAttribute('href', item.link)
            itemLink.setAttribute('target', '_blank')

            const itemThumbnail = document.createElement('img');
            itemThumbnail.classList.add('thumbnail');
            itemThumbnail.setAttribute('src', item.thumbnail);

            // const collapsibleButton = document.createElement('button');
            // collapsibleButton.classList.add('collapsible');
            // collapsibleButton.textContent = 'Show Details';

            const collapsibleContent = document.createElement('div');
            collapsibleContent.classList.add('collapsible-content');
            collapsibleContent.style.display = 'none';

            itemThumbnail.addEventListener('click', () => {
              const content = itemElement.querySelector('.collapsible-content');
              const allCollapsibleContents = portfolio.querySelectorAll('.collapsible-content');
  
              // Close all other collapsibles
              allCollapsibleContents.forEach((contentItem) => {
                  if (contentItem !== content) {
                      contentItem.style.display = 'none';
                  }
              });
  
              // Toggle the display of the clicked collapsible content
              content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
    
            itemElement.appendChild(itemThumbnail);
            collapsibleContent.appendChild(itemName);
            collapsibleContent.appendChild(itemInfo);
            collapsibleContent.appendChild(itemLink);

            // itemElement.appendChild(collapsibleButton);
            itemElement.appendChild(collapsibleContent);
            portfolio.appendChild(itemElement);
        });

}

initializeItems();

// Toggle the sorting order when the button is clicked
// sortButton.addEventListener('click', () => {
//     ascendingOrder = !ascendingOrder; // Toggle the sorting order
//     sortItemsByName(); // Call the sorting function
//     sortButton.textContent = ascendingOrder ? 'A – Z' : 'Z – A';

// });

// Function to sort the items by name
function sortItemsByName() {
    if (ascendingOrder) {
        podcastsData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        podcastsData.sort((a, b) => b.name.localeCompare(a.name));
    }
    initializeItems(); // Reinitialize items with the sorted data
}

// Step 1: Extract unique values for each filter category
function getUniqueValues(data, category) {
    const uniqueValues = new Set();
    data.forEach(podcast => {
      const value = podcast[category];
      if (value) {
        uniqueValues.add(value);
      }
    });
    return Array.from(uniqueValues);
  }
  
  // Step 2: Generate filter buttons dynamically for a specific category
//   function generateFilterButtons(category, uniqueValues) {
//     const filterCategory = document.querySelector(`.filter-category[data-category="${category}"]`);
//     const filterButtonsContainer = filterCategory.querySelector('.filter-buttons');
  
//     uniqueValues.forEach(value => {
//       const button = document.createElement('button');
//       button.className = 'filter';
//       button.setAttribute('data-category', category);
//       button.setAttribute('data-filter', value);
//       button.textContent = value;
//       filterButtonsContainer.appendChild(button);
//     });
//   }

  function generateFilterButtons(category, uniqueValues) {
    const filterCategory = document.querySelector(`.filter-category[data-category="${category}"] .filter-buttons`);
    const sortedValues = uniqueValues.sort(); // Sort the values alphabetically
  
    sortedValues.forEach(value => {
      const button = document.createElement('button');
      button.className = 'filter';
      button.setAttribute('data-category', category);
      button.setAttribute('data-filter', value);
      button.textContent = value;
      filterCategory.appendChild(button);
    });
  }
  
  // Step 3: Attach event listeners to filter buttons
  function attachFilterButtonListeners() {
    const filterButtons = document.querySelectorAll('.filter');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        filterItems();
      });
    });
  }


  // Get unique values for all filter categories
  const uniqueVerlagValues = getUniqueValues(podcastsData, 'verlag');
  const uniqueThemaValues = getUniqueValues(podcastsData, 'thema');
  const uniqueArtValues = getUniqueValues(podcastsData, 'art');
  const uniqueDauerValues = getUniqueValues(podcastsData, 'dauer');
  
  // Generate filter buttons for all filter categories
  generateFilterButtons('verlag', uniqueVerlagValues);
  generateFilterButtons('thema', uniqueThemaValues);
  generateFilterButtons('art', uniqueArtValues);
  generateFilterButtons('dauer', uniqueDauerValues);
  
  // Attach event listeners to all filter buttons
  attachFilterButtonListeners();
  
  function filterItems() {
    const filters = document.querySelectorAll('.filter');
    const activeFilters = Array.from(filters).filter(f => f.classList.contains('active'));
    console.log('Active Filters:', activeFilters);

    portfolio.querySelectorAll('.item').forEach(item => {
        const isVisible = activeFilters.every(filter => {
            const category = filter.getAttribute('data-category');
            const filterValue = filter.getAttribute('data-filter');
            console.log('Category:', category);
            console.log('Filter Value:', filterValue);
            return item.getAttribute(`data-${category}`) === filterValue;
        });

        item.style.display = isVisible ? 'block' : 'none';
    });
}


const collapseFilters = document.querySelector('.collapse-filters');
const filterMenu = document.querySelector('.filters');

function filtersVisible() {

collapseFilters.addEventListener('click', () => {
    // Toggle the display of the clicked collapsible content
    filterMenu.style.display = filterMenu.style.display === 'block' ? 'none' : 'block';
    collapseFilters.textContent = filterMenu.style.display === 'block' ? 'Filter ausblenden' : 'Filter anzeigen';
  });
}

filtersVisible();

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    filterMenu.style.display = 'block';
    collapseFilters.textContent = filterMenu.style.display === 'block' ? 'Filter ausblenden' : 'Filter anzeigen';
  } else {
  }

  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   filterMenu.style.display = 'none';
  //   collapseFilters.textContent = filterMenu.style.display === 'block' ? 'Filter ausblenden' : 'Filter anzeigen';
  // } else {
  // }
})