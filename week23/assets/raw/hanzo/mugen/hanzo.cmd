; The CMD file.
;
; Two parts: 1. Command definition and  2. State entry
; (state entry is after the commands def section)
;
; 1. Command definition
; ---------------------
; Note: The commands are CASE-SENSITIVE, and so are the command names.
; The eight directions are:
;   B, DB, D, DF, F, UF, U, UB     (all CAPS)
;   corresponding to back, down-back, down, downforward, etc.
; The six buttons are:
;   a, b, c, x, y, z               (all lower case)
;   In default key config, abc are are the bottom, and xyz are on the
;   top row. For 2 button characters, we recommend you use a and b.
;   For 6 button characters, use abc for kicks and xyz for punches.
;
; Each [Command] section defines a command that you can use for
; state entry, as well as in the CNS file.
; The command section should look like:
;
;   [Command]
;   name = some_name
;   command = the_command
;   time = time (optional -- defaults to 15 if omitted)
;
; - some_name
;   A name to give that command. You'll use this name to refer to
;   that command in the state entry, as well as the CNS. It is case-
;   sensitive (QCB_a is NOT the same as Qcb_a or QCB_A).
;
; - command
;   list of buttons or directions, separated by commas.
;   Directions and buttons can be preceded by special characters:
;   slash (/) - means the key must be held down
;          egs. command = /D       ;hold the down direction
;               command = /DB, a   ;hold down-back while you press a
;   tilde (~) - to detect key releases
;          egs. command = ~a       ;release the a button
;               command = ~D, F, a ;release down, press fwd, then a
;          If you want to detect "charge moves", you can specify
;          the time the key must be held down for (in game-ticks)
;          egs. command = ~30a     ;hold a for at least 30 ticks, then release
;   dollar ($) - Direction-only: detect as 4-way
;          egs. command = $D       ;will detect if D, DB or DF is held
;               command = $B       ;will detect if B, DB or UB is held
;   plus (+) - Buttons only: simultaneous press
;          egs. command = a+b      ;press a and b at the same time
;               command = x+y+z    ;press x, y and z at the same time
;   You can combine them:
;     eg. command = ~30$D, a+b     ;hold D, DB or DF for 30 ticks, release,
;                                  ;then press a and b together
;   It's recommended that for most "motion" commads, eg. quarter-circle-fwd,
;   you start off with a "release direction". This matches the way most
;   popular fighting games implement their command detection.
;
; - time (optional)
;   Time allowed to do the command, given in game-ticks. Defaults to 15
;   if omitted
;
; If you have two or more commands with the same name, all of them will
; work. You can use it to allow multiple motions for the same move.
;
; Some common commands examples are given below.


;-| Super Motions |--------------------------------------------------------

[Command]
Name = "pillar"
Command = ~D,DF,F,D,DF,F, x
time = 35

[Command]
Name = "pillar"
Command = ~D,DF,F,D,DF,F, a
time = 35

[Command]
Name = "pillar"
Command = ~D,DF,F,D,DF,F, z
time = 35

[Command]
Name = "megastar"
Command = ~D,DF,F,D,DF,F, x
time = 25

[Command]
Name = "megastar"
Command = ~D,DF,F,D,DF,F, a
time = 25

[Command]
Name = "megastar"
Command = ~D,DF,F,D,DF,F, z
time = 25

[Command]
Name = "hsdm"
Command = ~D,DF,F,DF,D,DB,B, z
time = 25
;-| Special Motions |------------------------------------------------------


[Command]
Name = "star"
Command = ~D,DF,F, x
time = 25

[Command]
Name = "star2"
Command = ~D,DF,F, a
time = 25

[Command]
Name = "star3"
Command = ~D,DF,F, z
time = 25

[Command]
Name = "slinky"
Command = ~D,DB,B, x
time = 25

[Command]
Name = "slinky2"
Command = ~D,DB,B, a
time = 25

[Command]
Name = "slinky3"
Command = ~D,DB,B, z
time = 25

[Command]
Name = "strike"
Command = ~F,D,DF, y
time = 16

[Command]
Name = "strike2"
Command = ~F,D,DF, b
time = 16

[Command]
Name = "strike3"
Command = ~F,D,DF, c
time = 16

[Command]
Name = "teleport"
Command = ~F,D,DF, x
time = 16

[Command]
Name = "teleport2"
Command = ~F,D,DF, a
time = 16

[Command]
Name = "teleport3"
Command = ~F,D,DF, z
time = 16

[Command]
Name = "teleport4"
Command = ~F, DF, D, DB, B, c
time = 25

;-| Double Tap |-----------------------------------------------------------
[Command]
name = "FF"     ;Required (do not remove)
command = F, F
time = 13

[Command]
name = "BB"     ;Required (do not remove)
command = B, B
time = 13

[Command]
name = "duck1"
command = D, D
time = 9
;-| 2/3 Button Combination |-----------------------------------------------
[Command]
name = "recovery" ;Required (do not remove)
command = a+b
time = 1

[Command]
name = "rush"
command = y+a
time = 1

[Command]
name = "recovery"
command = x+z
time = 1

[Command]
name = "recovery"
command = a+b
time = 1

[Command]
name = "recovery"
command = b+c
time = 1

[Command]
name = "recovery"
command = a+c
time = 1

;-| Dir + Button |---------------------------------------------------------
[Command]
name = "back_x"
command = /$B,x
time = 1

[Command]
name = "back_y"
command = /$B,y
time = 1

[Command]
name = "back_z"
command = /$B,z
time = 1

[Command]
name = "down_x"
command = /$D,x
time = 1

[Command]
name = "down_y"
command = /$D,y
time = 1

[Command]
name = "down_z"
command = /$D,z
time = 1

[Command]
name = "fwd_x"
command = /$F,x
time = 1

[Command]
name = "fwd_y"
command = /$F,y
time = 1

[Command]
name = "fwd_z"
command = /$F,z
time = 1

[Command]
name = "up_x"
command = /$U,x
time = 1

[Command]
name = "up_y"
command = /$U,y
time = 1

[Command]
name = "up_z"
command = /$U,z
time = 1

[Command]
name = "back_a"
command = /$B,a
time = 1

[Command]
name = "back_b"
command = /$B,b
time = 1

[Command]
name = "back_c"
command = /$B,c
time = 1

[Command]
name = "down_a"
command = /$D,a
time = 1

[Command]
name = "down_b"
command = /$D,b
time = 1

[Command]
name = "down_c"
command = /$D,c
time = 1

[Command]
name = "fwd_a"
command = /$F,a
time = 1

[Command]
name = "fwd_b"
command = /$F,b
time = 1

[Command]
name = "fwd_c"
command = /$F,c
time = 1

[Command]
name = "up_a"
command = /$U,a
time = 1

[Command]
name = "up_b"
command = /$U,b
time = 1

[Command]
name = "up_c"
command = /$U,c
time = 1

;-| Single Button |---------------------------------------------------------
[Command]
name = "a"
command = a
time = 1

[Command]
name = "b"
command = b
time = 1

[Command]
name = "c"
command = c
time = 1

[Command]
name = "x"
command = x
time = 1

[Command]
name = "y"
command = y
time = 1

[Command]
name = "z"
command = z
time = 1

[Command]
name = "start"
command = s
time = 1

[Command]
name = "power"
command = x+a
time = 1

[Command]
name = "power2"
command = y+b
time = 1
;-| Hold Button |--------------------------------------------------------------
[Command]
name = "hold_x"
command = /x
time = 1

[Command]
name = "hold_y"
command = /y
time = 1

[Command]
name = "hold_z"
command = /z
time = 1

[Command]
name = "hold_a"
command = /a
time = 1

[Command]
name = "hold_b"
command = /b
time = 1

[Command]
name = "hold_c"
command = /c
time = 1

[Command]
name = "hold_start"
command = /s
time = 1

;-| Hold Dir |--------------------------------------------------------------
[Command]
name = "holdfwd" ;Required (do not remove)
command = /$F
time = 1

[Command]
name = "holddownfwd"
command = /$DF
time = 1

[Command]
name = "holddown" ;Required (do not remove)
command = /$D
time = 1

[Command]
name = "holddownback"
command = /$DB
time = 1

[Command]
name = "holdback" ;Required (do not remove)
command = /$B
time = 1



[Command]
name = "holdup" ;Required (do not remove)
command = /$U
time = 1


[Command]
name = "holddownforward";Required (do not remove)
command = /DF
time = 1

[Command]
name = "longjump"
command = D, $U
time = 18

[Command]
name = "holdfwd"
command = /$F
time = 1

[Command]
name = "holdback"
command = /$B
time = 1

[Command]
name = "holdup"
command = /$U
time = 1

[Command]
name = "holddown"
command = /$D
time = 1

;---------------------------------------------------------------------------
; 2. State entry
; --------------
; This is where you define what commands bring you to what states.
;
; Each state entry block looks like:
;   [State -1, Label]           ;Change Label to any name you want to use to
;                               ;identify the state with.
;   type = ChangeState          ;Don't change this
;   value = new_state_number
;   trigger1 = command = command_name
;   . . .  (any additional triggers)
;
; - new_state_number is the number of the state to change to
; - command_name is the name of the command (from the section above)
; - Useful triggers to know:
;   - statetype
;       S, C or A : current state-type of player (stand, crouch, air)
;   - ctrl
;       0 or 1 : 1 if player has control. Unless "interrupting" another
;                move, you'll want ctrl = 1
;   - stateno
;       number of state player is in - useful for "move interrupts"
;   - movecontact
;       0 or 1 : 1 if player's last attack touched the opponent
;                useful for "move interrupts"
;
; Note: The order of state entry is important.
;   State entry with a certain command must come before another state
;   entry with a command that is the subset of the first.  
;   For example, command "fwd_a" must be listed before "a", and
;   "fwd_ab" should come before both of the others.
;
; For reference on triggers, see CNS documentation.
;
; Just for your information (skip if you're not interested):
; This part is an extension of the CNS. "State -1" is a special state
; that is executed once every game-tick, regardless of what other state
; you are in.


; Don't remove the following line. It's required by the CMD standard.
[Statedef -1]

;==================================================================

;===========================================================================
[State -1]
type = ChangeState
value = 3600
triggerall = command = "hsdm"
triggerall = var(7) = 1
trigger1 = statetype != A && ctrl

[State -1]
type = ChangeState
value = 3010
triggerall = command = "pillar"
triggerall = power >= 1000
trigger1 = statetype != A && ctrl

[State -1]
type = ChangeState
value = 3000
triggerall = command = "megastar"
triggerall = numproj = 0
triggerall = power >= 1000
trigger1 = statetype = A && ctrl


[State -1]
type = ChangeState
value = 1000
triggerall = command = "star"
trigger1 = statetype = A && ctrl

[State -1]
type = ChangeState
value = 1001
triggerall = command = "star2"
trigger1 = statetype = A && ctrl

[State -1]
type = ChangeState
value = 1002
triggerall = command = "star3"
trigger1 = statetype = A && ctrl

[State -1]
type = ChangeState
value = 1100
triggerall = command = "slinky"
triggerall = numproj = 0
trigger1 = statetype != A && ctrl

[State -1]
type = ChangeState
value = 1101
triggerall = command = "slinky2"
triggerall = numproj = 0
trigger1 = statetype != A && ctrl

[State -1]
type = ChangeState
value = 1102
triggerall = command = "slinky3"
triggerall = numproj = 0
trigger1 = statetype != A && ctrl

[State -1]
type = ChangeState
value = 1200
triggerall = command = "strike"
trigger1 = statetype = S || StateType = C
trigger1 = p2bodydist x < 35
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1210
triggerall = command = "strike2"
trigger1 = statetype = S || StateType = C
trigger1 = p2bodydist x < 35
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1220
triggerall = command = "strike3"
trigger1 = statetype = S || StateType = C
trigger1 = p2bodydist x < 35
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1300
triggerall = command = "teleport"
trigger1 = statetype = S || StateType = C
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1310
triggerall = command = "teleport2"
trigger1 = statetype = S || StateType = C
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1320
triggerall = command = "teleport3"
trigger1 = statetype = S || StateType = C
trigger1 = ctrl

[State -1]
type = ChangeState
value = 1500
triggerall = command = "c" || command = "z"
triggerall = time >= 0
triggerall = Statetype != A
trigger1 = stateno = 5000
trigger2 = stateno = 5001
trigger3 = stateno = 5002
trigger4 = stateno = 5010
trigger5 = stateno = 5011
trigger6 = stateno = 5012
trigger7 = stateno = 5020
trigger8 = stateno = 5021
trigger9 = stateno = 5022

[State -1]
type = ChangeState
value = 1600
triggerall = command = "teleport4"
trigger1 = statetype = S || StateType = C
trigger1 = ctrl
;---------------------------------------------------------------------------
; Run Fwd
[State -1, Run Fwd]
type = ChangeState
value = 100
trigger1 = command = "FF"
trigger1 = statetype = S
trigger1 = ctrl

;---------------------------------------------------------------------------
; Run Back
[State -1, Run Back]
type = ChangeState
value = 105
trigger1 = command = "BB"
trigger1 = statetype = S
trigger1 = ctrl
;----------------------------
[State -1]
type = ChangeState
value = 110
triggerall = command = "duck1"
trigger1 = statetype = S
trigger1 = ctrl = 1
;-----------------------
;---------------------------------------------------------------------------
;===========================================================================
;---------------------------------------------------------------------------
; Taunt
[State -1, Taunt]
type = ChangeState
value = 195
triggerall = command = "start"
trigger1 = statetype != A
trigger1 = ctrl
;-----------------------------------
[State -1]
type = ChangeState
value = 800
trigger1 = command = "fwd_a"
trigger1 = statetype != A
trigger1 = ctrl
trigger1 = p2bodydist x < 15
trigger1 = stateno != 101
;
[State -1]
type = ChangeState
value = 800
trigger1 = command = "back_a"
trigger1 = statetype != A
trigger1 = ctrl
trigger1 = p2bodydist x < 15
trigger1 = stateno != 101
;-----------------------------
[State -1]
type = ChangeState
value = 850
trigger1 = command = "fwd_b"
trigger1 = statetype != A
trigger1 = ctrl
trigger1 = p2bodydist x < 15
trigger1 = stateno != 101
;
[State -1]
type = ChangeState
value = 850
trigger1 = command = "back_b"
trigger1 = statetype != A
trigger1 = ctrl
trigger1 = p2bodydist x < 15
trigger1 = stateno != 101
;-------------------------------- 
[State -1]
type = ChangeState
value = 910
triggerall = statetype = A
triggerall = ctrl = 1
triggerall = p2bodydist X < 9
triggerall = p2bodydist Y > -22
triggerall = p2bodydist Y < 22
triggerall = p2statetype = A
triggerall = p2movetype != H
trigger1 = command = "fwd_a"
trigger2 = command = "back_a"

;---------------------------------------------------------------------------
; Stand Light Punch
[State -1, Stand Light Punch]
type = ChangeState
value = 200
triggerall = command = "x"
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl



;---------------------------------------------------------------------------
; 
[State -1]
type = ChangeState
value = 210
triggerall = command = "a"
trigger1 = statetype = S
trigger1 = ctrl

;---------------------------------------------------------------------------
[State -1]
type = ChangeState
value = 220
triggerall = command = "z"
triggerall = Command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1



;---------------------------------------------------------------------------
; Stand Light Kick
[State -1, Stand Light Kick]
type = ChangeState
value = 230
triggerall = command = "y"
trigger1 = statetype = S
trigger1 = ctrl
;--------------------

; Stand Light Kick
[State -1, Stand Light Kick]
type = ChangeState
value = 240
triggerall = command = "b"
trigger1 = statetype = S
trigger1 = ctrl

;--------------
; Stand Light Kick
[State -1, Stand Light Kick]
type = ChangeState
value = 250
triggerall = command = "c"
triggerall = Command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1

;---------------------------------------------------------------------------
[State -1, Crouching Light Punch]
type = ChangeState
value = 400
triggerall = command = "x"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl

;---------------------------------------------------------------------------
;
[State -1]
type = ChangeState
value = 410
triggerall = command = "a"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl

;---------------------------------------------------------------------------

;---------------------------------------------------------------------------

[State -1]
type = ChangeState
value = 420
triggerall = command = "z"
triggerall = command = "holddown"
trigger1 = statetype! = C
trigger1 = ctrl

;-

[State -1]
type = ChangeState
value = 430
triggerall = command = "y"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl

;------------------------
[State -1]
type = ChangeState
value = 440
triggerall = command = "b"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl
;---------------------------------------------------------------------------
[State -1]
type = ChangeState
value = 450
triggerall = command = "c"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl
;---------------------------------------------------------------------------
[State -1, Jump Light Punch]
type = ChangeState
value = 600
triggerall = command = "x"
trigger1 = statetype = A
trigger1 = ctrl
;---------------------------------------
[State -1]
type = ChangeState
value = 610
triggerall = command = "a"
trigger1 = statetype = A
trigger1 = ctrl
;---------------------------------------------------------------------------
[State -1 ]
type = ChangeState
value = 620
triggerall = command = "z"
trigger1 = statetype = A
trigger1 = ctrl
;---------------------------------------------------------------------------
; 
[State -1, Jump Medium Punch]
type = ChangeState
value = 630
triggerall = command = "y"
trigger1 = statetype = A
trigger1 = ctrl
;------------------------------
[State -1, Jump Medium Punch]
type = ChangeState
value = 640
triggerall = command = "b"
trigger1 = statetype = A
trigger1 = ctrl

;----------------------------------------
[State -1, Jump Medium Punch]
type = ChangeState
value = 650
triggerall = command = "c"
trigger1 = statetype = A
trigger1 = ctrl
