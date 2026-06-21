
    function toggleCategory(id) {
        const contentBlock = document.getElementById(id);
        const parentCard = contentBlock.parentElement;
        
        // Toggle active state of clicked element
        if (parentCard.classList.contains('active')) {
            parentCard.classList.remove('active');
            contentBlock.style.maxHeight = null;
        } else {
            // Closes other open menus to stay clean and compact on phone screens
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
                const content = card.querySelector('.category-content');
                if(content) content.style.maxHeight = null;
            });

            parentCard.classList.add('active');
            contentBlock.style.maxHeight = contentBlock.scrollHeight + "px";
        }
    }
