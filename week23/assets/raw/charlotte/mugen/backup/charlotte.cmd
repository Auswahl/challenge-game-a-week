

;-| Super Motions |--------------------------------------------------------

[Command]
name = "sp05x"
command = ~D, DF, F, D, DF, F, x
time = 30

[Command]
name = "sp05y"
command = ~D, DF, F, D, DF, F, y
time = 30

[Command]
name = "sp05z"
command = ~D, DF, F, D, DF, F, z
time = 30

[Command]
name = "sp05c"
command = ~D, DF, F, D, DF, F, c
time = 30

[Command]
name = "sp05b"
command = ~D, DF, F, D, DF, F, b
time = 30

[Command]
name = "sp05a"
command = ~D, DF, F, D, DF, F, a
time = 30

[Command]
name = "sp07x"
command = ~D, DB, B, D, DB, B, x
time = 30

[Command]
name = "sp07y"
command = ~D, DB, B, D, DB, B, y
time = 30

[Command]
name = "sp07z"
command = ~D, DB, B, D, DB, B, z
time = 30

[Command]
name = "sp07c"
command = ~D, DB, B, D, DB, B, c
time = 30

[Command]
name = "sp07b"
command = ~D, DB, B, D, DB, B, b
time = 30

[Command]
name = "sp07a"
command = ~D, DB, B, D, DB, B, a
time = 30

[Command]
name = "sp06x"
command = ~B, F, B, F, x
time = 30

[Command]
name = "sp06y"
command = ~B, F, B, F, y
time = 30

[Command]
name = "sp06z"
command = ~B, F, B, F, z
time = 30

[Command]
name = "sp06c"
command = ~B, F, B, F, c
time = 30

[Command]
name = "sp06b"
command = ~B, F, B, F, b
time = 30

[Command]
name = "sp06a"
command = ~B, F, B, F, a
time = 30

;-| Special Motions |------------------------------------------------------
;-----------------

[Command]
name = "sp01x"
command = ~D, DF, F, x

[Command]
name = "sp01y"
command = ~D, DF, F, y

[Command]
name = "sp01z"
command = ~D, DF, F, z

[Command]
name = "sp01y02"
command = ~DB, UF, DF, DB, y

[Command]
name = "sp01z02"
command = ~DB, UF, DF, DB, z

[Command]
name = "sp01z03"
command = ~DB, UF, DF, DB, a

[Command]
name = "sp08"
command = ~D, DF, F, c

[Command]
name = "sp0802"
command = ~DB, UF, DF, DB, UF, c

[Command]
name = "sp0803"
command = ~DB, UF, DF, DB, UF, DF, c

[Command]
name = "sp0804"
command = ~DB, UF, DF, DB, UF, DF, UF, c

[Command]
name = "sp0805"
command = ~DB, UF, DF, DB, UF, DF, UF, DB, c

[Command]
name = "sp0806"
command = ~DB, UF, DF, DB, UF, DF, UF, DB, UB, c

[Command]
name = "sp02x"
command = ~D, DB, B, x

[Command]
name = "sp02x02"
command = ~D, DB, DF, UF, UB, x

[Command]
name = "sp02y"
command = ~D, DB, B, y

[Command]
name = "sp02y02"
command = ~D, DB, DF, UF, UB, y

[Command]
name = "sp02z"
command = ~D, DB, B, z

[Command]
name = "sp02z02"
command = ~D, DB, DF, UF, UB, z

[Command]
name = "sp03x"
command = ~F, D, DF, x

[Command]
name = "sp03x02"
command = ~F, DB, DF, DB, UF, x

[Command]
name = "sp03y"
command = ~F, D, DF, y

[Command]
name = "sp03y02"
command = ~F, DB, DF, DB, UF, y

[Command]
name = "sp03z"
command = ~F, D, DF, z

[Command]
name = "sp03z02"
command = ~F, DB, DF, DB, UF, z

[Command]
name = "sp08b"
command = ~F, D, DF, c

[Command]
name = "sp08b02"
command = ~F, DB, DF, DB, UF, c

[Command]
name = "sp08b03"
command = ~F, DB, DF, DB, UF, DF, c

[Command]
name = "sp08b04"
command = ~F, DB, DF, DB, UF, DF, UB, c

[Command]
name = "sp04x"
command = ~B, D, DB, x

[Command]
name = "sp04y"
command = ~B, D, DB, y

[Command]
name = "sp04y02"
command = ~B, DF, DB, DB, DF, UB, y

[Command]
name = "sp04z"
command = ~B, D, DB, z

[Command]
name = "sp04z02"
command = ~B, DF, DB, DB, DF, UB, z

[Command]
name = "sp04z03"
command = ~B, DF, DB, DB, DF, UB, z

[Command]
name = "3kick"
command = /$DF, c

[Command]
name = "2kick"
command = /$D, c

[Command]
name = "6kick"
command = /$F, c
time = 1

[Command]
name = "2800"
command = x+y

[Command]
name = "2900"
command = /F, x+y

;-| Double Tap |-----------------------------------------------------------
[Command]
name = "FF"       ;Required (do not remove)
command = F, F
time = 10

[Command]
name = "BB"       ;Required (do not remove)
command = B, B
time = 10


;-| 2/3 Button Combination |-----------------------------------------------
[Command]
name = "recovery" ;Required (do not remove)
command = x+y
time = 1

;-| Dir + Button |---------------------------------------------------------

[Command]
name = "fwd_x"
command = /F,x
time = 1

[Command]
name = "fwd_y"
command = /F,y
time = 1

[Command]
name = "fwd_z"
command = /F,z
time = 1

[Command]
name = "fwd_c"
command = /F,c
time = 1


;-| Single Button |---------------------------------------------------------

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
name = "s"
command = s
time = 1

;-| Hold Button |-----------------------------------------------------------

;-| Hold Dir |--------------------------------------------------------------
[Command]
name = "holdfwd"  ;Required (do not remove)
command = /$F
time = 1

[Command]
name = "holdback" ;Required (do not remove)
command = /$B
time = 1

[Command]
name = "holdup"   ;Required (do not remove)
command = /$U
time = 1

[Command]
name = "holddown" ;Required (do not remove)
command = /$D
time = 1

;---------------------------------------------------------------------------
; 2. State entry
; --------------
; This is where you define what commands bring you to what states.
;
; Each state entry block looks like:
;   [State -1]                  ;Don't change this
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
; For reference on triggers, see CNS documentation.
;
; Just for your information (skip if you're not interested):
; This part is an extension of the CNS. "State -1" is a special state
; that is executed once every game-tick, regardless of what other state
; you are in.


; Don't remove the following line. It's required by the CMD standard.
[Statedef -1]

;===========================================================================
;---------------------------------------------------------------------------


;sp05x
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05x"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp05y
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05y"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp05z
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05z"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp05c
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05c"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp05b
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05b"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp05a
[State -1]
type = ChangeState
value = 1500
triggerall = command = "sp05a"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;------------------------------------------------


;sp06x
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06x"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp06y
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06y"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp06z
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06z"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp06c
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06c"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp06b
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06b"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp06a
[State -1]
type = ChangeState
value = 1600
triggerall = command = "sp06a"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;------------------------------------------------


;sp07x
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07x"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp07y
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07y"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp07z
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07z"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp07c
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07c"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp07b
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07b"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;sp07a
[State -1]
type = ChangeState
value = 1700
triggerall = command = "sp07a"
triggerall = power >= 1000
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;------------------------------------------------

;sp04x
[State -1]
type = ChangeState
value = 1400
triggerall = command = "sp04x"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp04y
[State -1]
type = ChangeState
value = 1401
triggerall = command = "sp04y"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp04y02
[State -1]
type = ChangeState
value = 1401
triggerall = command = "sp04y02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp04z
[State -1]
type = ChangeState
value = 1402
triggerall = command = "sp04z"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp04z02
[State -1]
type = ChangeState
value = 1402
triggerall = command = "sp04z02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp04z03
[State -1]
type = ChangeState
value = 1402
triggerall = command = "sp04z03"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;------------------------------------------------

;sp03x
[State -1]
type = ChangeState
value = 1300
triggerall = command = "sp03x"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp03x02
[State -1]
type = ChangeState
value = 1300
triggerall = command = "sp03x02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp03y
[State -1]
type = ChangeState
value = 1310
triggerall = command = "sp03y"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp03y02
[State -1]
type = ChangeState
value = 1310
triggerall = command = "sp03y02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp03z
[State -1]
type = ChangeState
value = 1320
triggerall = command = "sp03z"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp03z02
[State -1]
type = ChangeState
value = 1320
triggerall = command = "sp03z02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;--------------------------------------------------

;sp08b
[State -1]
type = ChangeState
value = 1850
triggerall = command = "sp08b"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp08b02
[State -1]
type = ChangeState
value = 1850
triggerall = command = "sp08b02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp08b03
[State -1]
type = ChangeState
value = 1850
triggerall = command = "sp08b03"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp08b04
[State -1]
type = ChangeState
value = 1850
triggerall = command = "sp08b04"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;-----------------------------------------------------

;sp01x
[State -1]
type = ChangeState
value = 1100
triggerall = command = "sp01x"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp01y
[State -1]
type = ChangeState
value = 1101
triggerall = command = "sp01y"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp01y02
[State -1]
type = ChangeState
value = 1101
triggerall = command = "sp01y02"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp01z
[State -1]
type = ChangeState
value = 1102
triggerall = command = "sp01z"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp01z02
[State -1]
type = ChangeState
value = 1102
triggerall = command = "sp01z02"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp01z03
[State -1]
type = ChangeState
value = 1102
triggerall = command = "sp01z03"
triggerall = numhelper(1100) = 0
triggerall = numhelper(1101) = 0
triggerall = numhelper(1102) = 0
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;-----------------------------------------------------------

;sp08
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp08"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp0802
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp0802"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp0803
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp0803"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp0804
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp0804"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp0805
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp0805"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp0806
[State -1]
type = ChangeState
value = 1800
triggerall = command = "sp0806"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;-----------------------------------------------------------

;sp02x
[State -1]
type = ChangeState
value = 1200
triggerall = command = "sp02x"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp02x02
[State -1]
type = ChangeState
value = 1200
triggerall = command = "sp02x02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp02y
[State -1]
type = ChangeState
value = 1201
triggerall = command = "sp02y"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp02y02
[State -1]
type = ChangeState
value = 1201
triggerall = command = "sp02y02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp02z
[State -1]
type = ChangeState
value = 1202
triggerall = command = "sp02z"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;sp02z02
[State -1]
type = ChangeState
value = 1202
triggerall = command = "sp02z02"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;---------------------------------------------

;¦^Çq¤JÇf
[State -1]
type = ChangeState
value = 2900
triggerall = command = "2900"
triggerall = p2bodydist x <= 30
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1


;Á×Æ÷
[State -1]
type = ChangeState
value = 2800
triggerall = command = "2800"
trigger1 = !command = "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 230
trigger3 = movecontact = 1
trigger4 = stateno = 240
trigger4 = movecontact = 1
trigger5 = stateno = 320
trigger5 = movecontact = 1
trigger6 = stateno = 330
trigger6 = movecontact = 1
trigger7 = stateno = 340
trigger7 = movecontact = 1
trigger8 = stateno = 420
trigger8 = movecontact = 1
trigger9 = stateno = 430
trigger9 = movecontact = 1
trigger10 = stateno = 440
trigger10 = movecontact = 1
trigger11 = stateno = 520
trigger11 = movecontact = 1
trigger12 = stateno = 530
trigger12 = movecontact = 1
trigger13 = stateno = 550
trigger13 = movecontact = 1
trigger14 = stateno = 560
trigger14 = movecontact = 1
trigger15 = stateno = 250
trigger15 = movecontact = 1
trigger16 = stateno = 350
trigger16 = movecontact = 1
trigger17 = stateno = 450
trigger17 = movecontact = 1
trigger18 = stateno = 260
trigger18 = movecontact = 1
trigger19 = stateno = 360
trigger19 = movecontact = 1
trigger20 = stateno = 460
trigger20 = movecontact = 1

;Á×Æ÷°{¥´
[State -1]
type = ChangeState
value = 230
triggerall = stateno = 2800
triggerall = time >= 0
trigger1 = command = "x"

[State -1]
type = ChangeState
value = 330
triggerall = stateno = 2800
triggerall = time >= 0
trigger1 = command = "y"

[State -1]
type = ChangeState
value = 430
triggerall = stateno = 2800
triggerall = time >= 0
trigger1 = command = "z"
;----------------------------------------------------------


;===========================================================================
;---------------------------------------------------------------------------
;RunFwd
[State -1]
type = ChangeState
value = 100
trigger1 = command = "FF"
trigger1 = statetype = S
trigger1 = ctrl = 1

;---------------------------------------------------------------------------
;RunBack
[State -1]
type = ChangeState
value = 105
trigger1 = command = "BB"
trigger1 = statetype = S
trigger1 = ctrl = 1

;---------------------------------------------------------------------------



;---------------------------------------------------------------------------
;===========================================================================
;---------------------------------------------------------------------------

;--------------------------------------------------
;dashx
[State -1]
type = ChangeState
value = 250
triggerall = command = "fwd_x"
triggerall = command != "holddown"
trigger1 = stateno = 100
trigger1 = ctrl = 1

;dashy
[State -1]
type = ChangeState
value = 350
triggerall = command = "fwd_y"
triggerall = command != "holddown"
trigger1 = stateno = 100
trigger1 = ctrl = 1

;dashz
[State -1]
type = ChangeState
value = 450
triggerall = command = "fwd_z"
triggerall = command != "holddown"
trigger1 = stateno = 100
trigger1 = ctrl = 1

;dashc
[State -1]
type = ChangeState
value = 560
triggerall = command = "fwd_c"
triggerall = command != "holddown"
trigger1 = stateno = 100
trigger1 = ctrl = 1

;-------------------------------------------------------

; Standing light punch (near)
[State -1]
type = ChangeState
value = 240
triggerall = command = "x"
triggerall = p2bodydist x <= 35
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

; Standing light punch (far)
[State -1]
type = ChangeState
value = 230
triggerall = command = "x"
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 230
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 250
trigger4 = movecontact = 1
trigger5 = stateno = 350
trigger5 = movecontact = 1
trigger6 = stateno = 450
trigger6 = movecontact = 1
trigger7 = stateno = 560
trigger7 = movecontact = 1
trigger8 = stateno = 260
trigger8 = movecontact = 1
trigger9 = stateno = 220
trigger9 = movecontact = 1

;-------------------------------------------------

; Standing middle punch (near)
[State -1]
type = ChangeState
value = 340
triggerall = command = "y"
triggerall = p2bodydist x <= 45
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

; Standing middle punch (far)
[State -1]
type = ChangeState
value = 330
triggerall = command = "y"
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 230
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 250
trigger4 = movecontact = 1
trigger5 = stateno = 350
trigger5 = movecontact = 1
trigger6 = stateno = 450
trigger6 = movecontact = 1
trigger7 = stateno = 560
trigger7 = movecontact = 1
trigger8 = stateno = 260
trigger8 = movecontact = 1
trigger9 = stateno = 220
trigger9 = movecontact = 1

;-------------------------------------

; Standing stong punch (near)
[State -1]
type = ChangeState
value = 440
triggerall = command = "z"
triggerall = p2bodydist x <= 55
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 250
trigger8 = movecontact = 1
trigger9 = stateno = 350
trigger9 = movecontact = 1
trigger10 = stateno = 450
trigger10 = movecontact = 1
trigger11 = stateno = 560
trigger11 = movecontact = 1
trigger12 = stateno = 260
trigger12 = movecontact = 1
trigger13 = stateno = 360
trigger13 = movecontact = 1

; Standing stong punch (far)
[State -1]
type = ChangeState
value = 430
triggerall = command = "z"
triggerall = command != "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 240
trigger2= movecontact = 1
trigger3 = stateno = 340
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 330
trigger5 = movecontact = 1
trigger6 = stateno = 250
trigger6 = movecontact = 1
trigger7 = stateno = 350
trigger7 = movecontact = 1
trigger8 = stateno = 450
trigger8 = movecontact = 1
trigger9 = stateno = 560
trigger9 = movecontact = 1
trigger10 = stateno = 260
trigger10 = movecontact = 1
trigger11 = stateno = 360
trigger11 = movecontact = 1
trigger12 = stateno = 220
trigger12 = movecontact = 1
trigger13 = stateno = 320
trigger13 = movecontact = 1

;---------------------------------------------------------------------------

;Crouch light punch(near)
[State -1]
type = ChangeState
value = 260
triggerall = command = "x"
triggerall = p2bodydist x <= 40
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

;Crouch light punch(far)
[State -1]
type = ChangeState
value = 220
triggerall = command = "x"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

;---------------------------------------------------------------------------

;Crouch middle punch(near)
[State -1]
type = ChangeState
value = 360
triggerall = command = "y"
triggerall = p2bodydist x <= 40
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

;Crouch middle punch(far)
[State -1]
type = ChangeState
value = 320
triggerall = command = "y"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 230
trigger4 = movecontact = 1
trigger5 = stateno = 250
trigger5 = movecontact = 1
trigger6 = stateno = 350
trigger6 = movecontact = 1
trigger7 = stateno = 450
trigger7 = movecontact = 1
trigger8 = stateno = 560
trigger8 = movecontact = 1
trigger9 = stateno = 260
trigger9 = movecontact = 1

;----------------------------------------------

;Crouch stong punch(near)
[State -1]
type = ChangeState
value = 460
triggerall = command = "z"
triggerall = p2bodydist x <= 45
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 250
trigger8 = movecontact = 1
trigger9 = stateno = 350
trigger9 = movecontact = 1
trigger10 = stateno = 450
trigger10 = movecontact = 1
trigger11 = stateno = 560
trigger11 = movecontact = 1
trigger12 = stateno = 260
trigger12 = movecontact = 1
trigger13 = stateno = 360
trigger13 = movecontact = 1

;Crouch stong punch(far)
[State -1]
type = ChangeState
value = 420
triggerall = command = "z"
triggerall = command = "holddown"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 250
trigger8 = movecontact = 1
trigger9 = stateno = 350
trigger9 = movecontact = 1
trigger10 = stateno = 450
trigger10 = movecontact = 1
trigger11 = stateno = 560
trigger11 = movecontact = 1
trigger12 = stateno = 260
trigger12 = movecontact = 1
trigger13 = stateno = 360
trigger13 = movecontact = 1

;---------------------------------------------------------------------------
;Jump light punch
[State -1]
type = ChangeState
value = 210
trigger1 = command = "x"
trigger1 = statetype = A
trigger1 = ctrl = 1

;---------------------------------------------------------------------------
;Jump middle punch
[State -1]
type = ChangeState
value = 310
trigger1 = command = "y"
trigger1 = statetype = A
trigger1 = ctrl = 1

;--------------------------------------------------

;Jump stong punch
[State -1]
type = ChangeState
value = 410
trigger1 = command = "z"
trigger1 = statetype = A
trigger1 = ctrl = 1

;-----------------------------------------------------------
; Jump kick
[State -1]
type = ChangeState
value = 510
triggerall = command = "c"
trigger1 = statetype = A
trigger1 = ctrl = 1

; 3 kick
[State -1]
type = ChangeState
value = 520
triggerall = command = "3kick"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 250
trigger8 = movecontact = 1
trigger9 = stateno = 350
trigger9 = movecontact = 1
trigger10 = stateno = 450
trigger10 = movecontact = 1
trigger11 = stateno = 560
trigger11 = movecontact = 1
trigger12 = stateno = 260
trigger12 = movecontact = 1
trigger13 = stateno = 360
trigger13 = movecontact = 1
trigger14 = stateno = 460
trigger14 = movecontact = 1


; 2kick
[State -1]
type = ChangeState
value = 530
triggerall = command = "2kick"
trigger1 = statetype = C
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 530
trigger8 = movecontact = 1
trigger9 = stateno = 250
trigger9 = movecontact = 1
trigger10 = stateno = 350
trigger10 = movecontact = 1
trigger11 = stateno = 450
trigger11 = movecontact = 1
trigger12 = stateno = 560
trigger12 = movecontact = 1
trigger13 = stateno = 260
trigger13 = movecontact = 1
trigger14 = stateno = 360
trigger14 = movecontact = 1
trigger15 = stateno = 460
trigger15 = movecontact = 1

; 6kick
[State -1]
type = ChangeState
value = 550
triggerall = command = "6kick"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 550
trigger8 = movecontact = 1
trigger9 = stateno = 250
trigger9 = movecontact = 1
trigger10 = stateno = 350
trigger10 = movecontact = 1
trigger11 = stateno = 450
trigger11 = movecontact = 1
trigger12 = stateno = 560
trigger12 = movecontact = 1
trigger13 = stateno = 260
trigger13 = movecontact = 1
trigger14 = stateno = 360
trigger14 = movecontact = 1
trigger15 = stateno = 460
trigger15 = movecontact = 1

;5 kick
[State -1]
type = ChangeState
value = 540
triggerall = command = "c"
triggerall = !command = "holddown"
trigger1 = statetype = S
trigger1 = ctrl = 1
trigger2 = stateno = 220
trigger2 = movecontact = 1
trigger3 = stateno = 240
trigger3 = movecontact = 1
trigger4 = stateno = 320
trigger4 = movecontact = 1
trigger5 = stateno = 340
trigger5 = movecontact = 1
trigger6 = stateno = 230
trigger6 = movecontact = 1
trigger7 = stateno = 330
trigger7 = movecontact = 1
trigger8 = stateno = 250
trigger8 = movecontact = 1
trigger9 = stateno = 350
trigger9 = movecontact = 1
trigger10 = stateno = 450
trigger10 = movecontact = 1
trigger11 = stateno = 560
trigger11 = movecontact = 1
trigger12 = stateno = 260
trigger12 = movecontact = 1
trigger13 = stateno = 360
trigger13 = movecontact = 1
trigger14 = stateno = 460
trigger14 = movecontact = 1

;--------------------------------------------------------
