#Directory structure

	public *public file assets*
	private *private files*
	settings *runtime configuration files*
	packages
			-> client
				-> templates		 *all client templates*
					-> functionalTriad		*camelCased short functional template naming*
						functionalTriad.less	*triad of functional group, new functionality goes in sub*
						functionalTriad.html
						functionalTriad.coffee
							-> subFunctionalTriad
								subFunctionalTriad.less
								subFunctionalTriad.html
								subFunctionalTriad.coffee
						
				-> lib  *client specific shared libraries*
				register.coffee 	*files common to all client side* *register adds to reaction dashboard*
				routing.coffee
				subscriptions.coffee
			-> common *code common to client and server*
				collections.coffee
			-> lib 		*libraries for server side*
			-> server	*server side code*
				methods.coffee
				publications.coffee
			package.js *package declarations for meteor*
			

#Presentation layer
	-> functionalTriad
		functionalTriad.less
			class="functional-triad-class" *hyphenated class names, replace camel casing*
			id="functional-triad-id"

		functionalTriad.html
			<template name="functionalTriad">

		functionalTriad.coffee
			Template.functionalTriad.helpers
			Template.functionalTriad.events
###Code Style
When using event, template parameters in methods, use full names

	'click': (event,template) ->

#Server layer
	
			functionalMethod *try to follow functional, action*
			functionalAddItem *example*
		