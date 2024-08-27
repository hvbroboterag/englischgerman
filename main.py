def on_button_a():
    global Count_EN
    Count_EN = Count_EN + 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    if Count_DE == Count_EN:
        basic.show_string("DE=EN= ")
        basic.show_string("" + str((Count_DE)))
        basic.pause(2000)
    elif Count_DE > Count_EN:
        basic.show_string("DE>EN um ")
        basic.show_string("" + str((Count_DE - Count_EN)))
        basic.pause(2000)
    elif Count_DE < Count_EN:
        basic.show_string("EN>DE um" + str((Count_EN - Count_DE)))
        basic.show_string("" + str((Count_EN - Count_DE)))
        basic.pause(2000)
    else:
        basic.show_string("Kein Ergebnis")
        basic.pause(2000)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global Count_DE
    Count_DE = Count_DE + 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Count_DE = 0
Count_EN = 0
Count_EN = 0
Count_DE = 0
basic.show_string("GO ")