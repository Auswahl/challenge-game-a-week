#!perl

if( -e "backup" )
{
	print "Backup directory already exist !\n";
}
else
{
	print "Creating backup directory.\n";
	system "mkdir backup";
	system "attrib -R /s"
}


print "Processing .CNS files :\n";

foreach $fileName( <*.cns> )
{
	print "\t" . $fileName . " ... ";

	$fileName =~ s/\.CNS//;
	$fileName =~ s/\.cns//;

	if( not( -e "backup/$fileName.cns" ) )
	{
		system "copy $fileName.cns backup";
	}

	open (  InputFH_CNS, "< $fileName.cns" );
	open ( OutputFH_CNS, "> $fileName.cns.new" );

	while( $ligne = <InputFH_CNS> )
	{
		$ligne =~ s/MoveContact = 1/MoveContact/g;
		$ligne =~ s/movecontact = 1/MoveContact/g;
		$ligne =~ s/MoveGuarded = 1/MoveGuarded/g;
		$ligne =~ s/moveguarded = 1/MoveGuarded/g;
		$ligne =~ s/MoveHit = 1/MoveHit/g;
		$ligne =~ s/movehit = 1/MoveHit/g;
		$ligne =~ s/MoveContact = 0/!MoveContact/g;
		$ligne =~ s/movecontact = 0/!MoveContact/g;
		$ligne =~ s/MoveGuarded = 0/!MoveGuarded/g;
		$ligne =~ s/moveguarded = 0/!MoveGuarded/g;
		$ligne =~ s/MoveHit = 0/!MoveHit/g;
		$ligne =~ s/movehit = 0/!MoveHit/g;

		print OutputFH_CNS $ligne;
	}

	close(  InputFH_CNS );
	close( OutputFH_CNS );

	system "del $fileName.cns";
	system "move $fileName.cns.new $fileName.cns";

	print "\tDone.\n";
}


print "\nProcessing .AIR files :\n";


foreach $fileName( <*.air> )
{
	print "\t" . $fileName . " ... ";

	$fileName =~ s/\.AIR//;
	$fileName =~ s/\.air//;

	if( not( -e "backup/$fileName.air" ) )
	{
		system "copy $fileName.air backup";
	}

	open (  InputFH_AIR, "< $fileName.air" );
	open ( OutputFH_AIR, "> $fileName.air.new" );

	while( $ligne = <InputFH_AIR> )
	{
		$ligne =~ s/Clsn2 =/Clsn2:/g;
		$ligne =~ s/clsn2 =/Clsn2:/g;

		print OutputFH_AIR $ligne;
	}

	close(  InputFH_AIR );
	close( OutputFH_AIR );

	system "del $fileName.air";
	system "move $fileName.air.new $fileName.air";

	print "\tDone.\n";
}

print "\nProcessing .CMD files :\n";

foreach $fileName( <*.cmd> )
{
	print "\t" . $fileName . " ... ";

	$fileName =~ s/\.CMD//;
	$fileName =~ s/\.cmd//;

	if( not( -e "backup/$fileName.CMD" ) )
	{
		system "copy $fileName.cmd backup";
	}

	open (  InputFH_CMD, "< $fileName.cmd" );
	open ( OutputFH_CMD, "> $fileName.cmd.new" );

	while( $ligne = <InputFH_CMD> )
	{
		$ligne =~ s/MoveContact = 1/MoveContact/g;
		$ligne =~ s/movecontact = 1/MoveContact/g;
		$ligne =~ s/MoveGuarded = 1/MoveGuarded/g;
		$ligne =~ s/moveguarded = 1/MoveGuarded/g;
		$ligne =~ s/MoveHit = 1/MoveHit/g;
		$ligne =~ s/movehit = 1/MoveHit/g;
		$ligne =~ s/MoveContact = 0/!MoveContact/g;
		$ligne =~ s/movecontact = 0/!MoveContact/g;
		$ligne =~ s/MoveGuarded = 0/!MoveGuarded/g;
		$ligne =~ s/moveguarded = 0/!MoveGuarded/g;
		$ligne =~ s/MoveHit = 0/!MoveHit/g;
		$ligne =~ s/movehit = 0/!MoveHit/g;

		print OutputFH_CMD $ligne;
	}

	close(  InputFH_CMD );
	close( OutputFH_CMD );

	system "del $fileName.cmd";
	system "move $fileName.cmd.new $fileName.cmd";

	print "\tDone\n";
}


if (-e "CharSffDtoW.exe")
{
	foreach $fileName( <*.sff> )
	{
		print "\nProcessing .SFF files :\n";

		print "\t" . $fileName . " ... ";

		$fileName =~ s/\.sff//;
		$fileName =~ s/\.SFF//;

		system "CharSffDtoW.exe $fileName.sff";
		system "CharSffDtoW.exe $fileName.SFF";

		system "move $fileName.sff.BAK backup\\$fileName.sff"
	}
}


print "\nConvertion completed successfuly !\n";

sleep 3;


