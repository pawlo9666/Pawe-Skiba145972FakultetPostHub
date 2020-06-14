class Spiew(object):
    #specjalna funkcja ktora sie odpala w momencie tworzenia obiektu
    #obiekt za argument self 
    name

    def init(self, lyrics):
        #co tu sie dzieje spytaj kogos madrego pls
        #lyrics atrybut 
        self.lyrics = lyrics

    def sing_me_to_sleep(self):
        for line in self.lyrics:
            print(line)

    def call_my_name(self):
        print(self.name)

#tekst1, nazwa tekst1 sama w sobie jest argumentem self = obiekt klasy spiew 
tekst1 = Spiew (["""I've became so nuumb,
            I can feel you there,
            The pain is naruto character,
            Like a pancake"""])
tekst2 = Spiew (["""Pain 7 paths
            Pain, with rasesngan
            Pain is strong
            But naruto is stronger
            Than nothing at all"""])

tekst1.sing_me_to_sleep()
tekst1.name = "Naruto"
tekst1.call_my_name()
tekst2.sing_me_to_sleep()