'use strict';

var $nextButton = $('#next');
var $container = $('.hero-unit');
var $steps = $container.children('.step');
var $currentStep = null;
var $nextStep = $steps.first();

$nextButton.one('click', function(){
    console.log('One click!');
    doStep();
    $nextButton.text('Continuer');

    $nextButton.on('click', function(){
        console.log('click!');
        doStep();
    })
});

var doStep = function(){
    if($currentStep){
        $currentStep.removeClass('current');
    }
    $currentStep = $nextStep;
    $nextStep = $currentStep.next('.step');
    $currentStep.show().addClass('show current');
    $container.animate({scrollTop: $container.scrollTop() + $currentStep.position().top}, 1000);
};
