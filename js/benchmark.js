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
var benchmarks,
elements = 1000,
container,
executedTests = [];

function register(name, benchMethod, setupMethod, teardownMethod){
	teardownMethod = teardownMethod || function(){
		container.empty()
	};
	
	benchmarks.add(name,
		function(){
			benchMethod();
		},
		{
			setup: setupMethod,
			teardown: teardownMethod,
			onStart: function(){
				$(document).trigger("event", name);
			}
		});
}

(function($){
	executedTests = 0;
	
	function executed(){
		$(document).trigger("progress", ++executedTests);
	}
	
	function end(){
		$(document).trigger("endProgress");
		$(document).trigger("end");
	}
	
	function exec(){
		executedTests = [];
		benchmarks.run({
			async:true, 
			queued: true
		});
	}
	
	function displayResult(bench){
		var tr;
		
		if (typeof bench.tr === "undefined"){
			var table = $("#results");
			if (table.length == 0){
				table = $("<table id='results'><tr><th>Test</th><th>Speed</th><th>Error</th><th>Actions</th></tr></table>").appendTo("body");
			}
			
			tr = $("<tr />").appendTo(table)
		}else{
			tr = bench.tr.empty();
		}
		
		var link = $("<a href='#'>Relaunch</a>");
			
		$("<td />").appendTo(tr).text(bench.name);
		$("<td class='speed' />").appendTo(tr).text(Math.round(1/bench.stats.mean));
		$("<td class='error' />").appendTo(tr)
		.text("" + (Math.round(bench.stats.rme * 100) / 100) + "%");
		
		$("<td />").appendTo(tr)
		.append(link);
		
		(function(b, tr){
			link.click(function(){
				tr.find(".speed,.error").empty();
				bench.tr = tr;
				
				bench.removeAllListeners();
				bench.on("complete", function(e){
					displayResult	(bench);
				});
				
				bench.run();
				
				return false;
			});
		})(bench, tr);
	}
	
	benchmarks = new Benchmark.Suite("Bench suite")
	.on("cycle", function(event, bench){
		console.log(String(bench));
		if (typeof bench.tr === 'undefined'){
			executedTests.push(bench);	
			$(document).trigger("progress", executedTests.length);
		}
		
		displayResult(bench);
	})
	.on("complete", function(){
		end();
	});
	
	/**
	 * Entry point
	 */
	$(document).bind("setup", function(){
		container = $("#crap");
		$(document).trigger("startProgress", benchmarks.length);
		setTimeout(function(){
			exec();
			
		}, 500);
	});
	
})(jQuery);


