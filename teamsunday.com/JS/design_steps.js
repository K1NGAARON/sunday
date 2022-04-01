// On global javascript

function getDefaultParamsDesignSteps(title) {
    return {
        intro: 'intooooooooooooooooo',
        steps: [
            {
                image: 'https://teamsunday.com/wp-content/uploads/2022/03/step1-1.png',
                text: 'text 1',
                title: 'title 1',
            },
            {
                image: 'https://teamsunday.com/wp-content/uploads/2022/03/step2.png',
                text: 'text 2',
                title: 'text 2',
            },
            {
                image: 'https://teamsunday.com/wp-content/uploads/2022/03/step3.png',
                text: 'text 43',
                title: 'text 3',
            },
            {
                image: 'https://teamsunday.com/wp-content/uploads/2022/03/step4.png',
                text: 'text 4',
                title: 'text 4',
            },
        ],
        subTitle: 'subtitleeeeeeeeeeee',
        title: title
    };
}

window.designSteps = {
    'casual_wear': getDefaultParamsDesignSteps('Custom casual wear'),
    'sports_wear': getDefaultParamsDesignSteps('Custom sports wear'),
};

window.createSteps = function (targetElement, uniqueToken) {
    console.log("eerste lijn");
    console.log('designsteps', window.hasOwnProperty('designSteps'));
    console.log('window.designSteps', window.designSteps);
    console.log('uniqueToken', uniqueToken);
    if (!window.hasOwnProperty('designSteps')
        || !window.designSteps.hasOwnProperty(uniqueToken)) {
        return;
    }
    
    console.log("achter de if");

    const params = window.designSteps[uniqueToken];

    if (!params.hasOwnProperty('steps')
        || !Array.isArray(params.steps)
        || params.steps.length < 1) {
        return;
    }

    console.log("passed window.createSteps = function (targetElement, uniqueToken)");

    let steps = '';
    let currentStep = params.steps[0];

    console.log(currentStep);


    for (let i = 1; i <= params.steps.length; i++) {
        let classes = i === 1
            ? ' active'
            : '';
        steps += `
<a id="step-${i}" class="design-tags solution-btn tag-button${classes}"
    data-image="${params.steps[i-1].image}"
    data-text="${params.steps[i-1].text}"
    data-title="${params.steps[i-1].title}">
     Step ${i}
</a>
`;
    }

    targetElement.innerHTML = `
<div class="custom-section-full hidden">
    <div class="custom-row">
        <div class="custom-col">
            <p class="small-headline">
                ${params.title ?? ''}
            </p>
            <h2>
                ${params.subTitle ?? ''}
            </h2>
            <p class="design-intro-placeholder">
                ${params.intro ?? ''}
            </p>
            <div class="solution-btn-wrapper tag-button-container">
                ${steps}
            </div>
            <div class="design-steps-text-holder">
                <p class="title-holder" style="font-weight: 700; font-size: 16px; margin-top: 10px;">
                    ${currentStep.title}
                </p>
                <p class="text-holder">
                    ${currentStep.text}
                </p>
            </div>
            
        </div>
        <div class="custom-col">
            <img class="img-steps-holder" src="${currentStep.image}" alt="${currentStep.title}">
        </div>
    </div> 
</div>
    `;

    // Bind events
    $(targetElement).on('click', '.design-tags', (event) => {
        const step = $(event.target);
        const container = step.closest(targetElement);

        container.find('.title-holder').html(step.attr('data-title'));
        container.find('.text-holder').html(step.attr('data-text'));
        container.find('.img-steps-holder').attr("src", step.attr('data-image'));
    });
}

// Tags a button in a specific container
//   needs class="tag-button-container"
//   needs class="tag-button" on each button
$('body').on('click', '.tag-button', (event) => {
    const tagButton = $(event.target).closest('.tag-button');
    console.log("clicked button");
    console.log(tagButton);
    const container = tagButton.closest('.tag-button-container');

    container.find('.tag-button').removeClass('active');
    tagButton.addClass('active');
});

// On each page
window.addEventListener('DOMContentLoaded', () => {
    console.log("loadeeeeeeeeeeeed");
    const targetElement = document.getElementById('steps_container');
    console.log(targetElement);
    const uniqueToken = 'casual_wear'; // e.g. casual_wear
    window.createSteps(targetElement, uniqueToken);
});
