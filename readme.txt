Enterprise Framework Unifying Cloud Code (FUCC)
===============================================

Enterprise FUCC is a new value-added agile framework for bootstrapping your cloud presence.  It supports a multitude of paradigms so that you don't work for EFUCC - EFUCC works for you!

Try a demo right now - no credit card required! (Link to online EFUCC interpreter) (Clippy.js/chat with a sales rep now) (Migrating from Brainfuck)

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
	
	
Hello world example 2:

	import hk;
	import hk.enterprise;
	import hk.enterprise.logistics;
	import hk.enterprise.logistics.local;
	import hk.enterprise.logistics.local.operations;
	import hk.enterprise.logistics.local.operations.web;
	import hk.enterprise.logistics.local.operations.web.online;
	import hk.enterprise.logistics.local.operations.web.online.responsive;
	import hk.enterprise.logistics.local.operations.web.online.responsive.less;
	import hk.enterprise.logistics.local.operations.web.online.responsive.less.dijits;
	