/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

 'use strict';

var SearchPage = function() {
	this.prevElem = element.all(by.css('.pagination-sm li')).first();
	this.prevLink = element.all(by.css('.pagination-sm li a')).first();

	this.nextElem = element.all(by.css('.pagination-sm li')).last();
	this.nextLink = element.all(by.css('.pagination-sm li a')).last();

	this.pgOneElem = element.all(by.css('.pagination-sm li')).get(1);
	this.pgOneLink = element.all(by.css('.pagination-sm li a')).get(1);

	this.pgTwoElem = element.all(by.css('.pagination-sm li')).get(2);
	this.pgTwoLink = element.all(by.css('.pagination-sm li a')).get(2);

	this.titleInput = element.all(by.css('.form-control')).first();
	this.submitButton = element.all(by.css('.btn')).first();

	this.firstAccordion = element.all(by.tagName('accordion')).first();
	this.firstAccordionLink = this.firstAccordion.element(by.css('.panel-title a'));
	this.firstAccordionCollapseDiv = this.firstAccordion.element(by.css('.panel-collapse'));
	this.firstDetailsBtn = this.firstAccordion.element(by.buttonText('View Details'));
	
};

 module.exports = new SearchPage();

