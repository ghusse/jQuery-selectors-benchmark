/* 
 * Copyright (C) 2011 guillaumegautreau
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Cannot be compared to other index selectors, because it returns
 * more than just one element
 */
register("Less than selector ':lt()'",
	function(){
		container.find("p:lt(" + (elements - 1) + ")");
	},
	function(){
		createDivs(elements-1, container);
		container.append("<p></p>");
	});

/**
 * Does not work every time it is launched
 */
register("Focus selector ':focus'",
	function(){
		return container.find(":focus");
	},
	function(){
		container.css("display", "block")
		.css("width", 0)
		.css("height", 0)
		.css("overflow", "hidden");
		createInputs(elements, "text", container);
		container.find("input:last").focus();
	},
	function(){
		container.css("display", "none");
		container.empty	();
	});
	
