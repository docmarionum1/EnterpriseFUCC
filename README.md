Enterprise Framework Unifying Cloud Code (FUCC)
===============================================

Enterprise FUCC is a new value-added agile framework for bootstrapping your cloud presence.  It supports a multitude of paradigms so that you don't work for EFUCC - EFUCC works for you!

[Try a demo right now - no credit card required!] (http://jeremyneiman.com/EFUCC/)

What if my comapny is already locked into Brainfuck?
----------------------------------------------------

No problem!  We can [automatically convert] (http://jeremyneiman.com/EFUCC/brainfuckToFUCC.html) all of your current codebase from brainfuck to FUCC at no extra charge!

Specification V. 0.3.2
----------------------

The core of the Enterprise Framework Unifying Cloud Code is a Scalable Storage and Analytics Cylinder (SSAC) and several simple modules for I/O with SSAC.

SSAC occupies a scalable linear storage space with two-nibble sized buckets and supporting CRUD operations using an adjustable indexing scheme.

Initialization Module
---------------------

Initialize SSAC at the beginning of program with the following:

	import N0.N1...NM;
	
This will set:

	SSAC[M] <- NM[0]
	
For example, to set SSAC[3] <- "l":

	import hk.enterprise.logistics.local;
	

Index Correction Module
-----------------------

To advance the pointer by one address:

	SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();
	SACC.applyPointerAdvancement(++currentPosition);
	
To reduce the pointer by one address:

	SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();
	SACC.applyPointerReduction(--currentPosition);	
	
	
Value Correction Module
-----------------------

To advance the value at the current SACC pointer position by one:

	SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();
	currentPosition.applyValueAdvancement("increaseValueByOne.xml");
	
To reduce the value at the current SACC pointer position by one:

	SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();
	currentPosition.applyValueReduction("decreaseValueByOne.xml");	


Output Factory Module
---------------------

Output is produced by using any of the infinite number of lazily manufactured factories:

	F f = new F(R.P);
	f.P.write.T(C);

Where F is a valid factory, f is an instance of that factory, R is a dataflow specification, P is a subcomponent of R, T is the type of data being written and C is the data to write.  Valid factories use the naming convention `*Factory`. For example:

	OutputFactory outputFactoryInst = new OutputFactory(Routing.STDOUT);
	outputFactoryInst.STDOUT.write.character(SACC.getCurrentPointerValue(0));
	
To ensure maximum performability, `f` is garbage collected after one line, so a new instance must be created for each use.
	
	
Recurrance Module
-----------------

To create a recurrance use:

	while (SACC.RecurranceCheck(SACC.getCurrentPointerValue(0))) {
		//Statements
	}

This will continue to execute statements while the value at the current SACC pointer is not 0.
