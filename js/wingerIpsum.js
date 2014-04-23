// JavaScript Document

/*
WingerIpsum.js
JavaScript File for generating placeholder code at WingerIpsum.com
By Casey Colvin
4/22/14
All String Quotes © 2009-2014 Sony Pictures Television Inc Universal Media Studios
Community Airs Thursdays 8/7c on NBC
#sixseasonsandamovie
*/

function clearText() {
    $(document).ready(function () {
        $("#hiddenUntilGeneration").hide();
        $("#wingers").val('');
    }); //End Anonymous Function
}//End Clear Text Function

function getWingers() {
    $(document).ready(function () {
        //Clear any old text from text box.
        $('#wingers').text('');
        //Show box for code generated.
        $("#hiddenUntilGeneration").show();

        var wingersTextbox = $("#wingers");
        var wingersHeader = $("#header-tags").val();
        var wingerSpeeches = $("#paragraphs").val();
        var headerTag = "";
        var headerText = "";
        var classicWinger = "";
        var numberOfSpeeches = 0;
        var speechNumber = 0;
        var selectedSpeech = "";
        var speechesToDisplay = "";

        //'if' statement checking for header request. "No" has no value.
        if (wingersHeader != "") {
            var wingersArray = new Array();
            wingersArray[0] = "To victory: it feels unfamiliar but it tastes like chicken.";
            wingersArray[1] = "I'm a teacher. Wait. That's worse than the truth. I'm a student.";
            wingersArray[2] = "If you guys just let me get to the can opener, I can feed you.";
            wingersArray[3] = "Looks like someone sent us a message. A tiny, underwhelming message.";
            wingersArray[4] = "It's a scary, Chang-filled world out there.";
            wingersArray[5] = "I always go the extra mile to avoid doing things.";
            wingersArray[6] = "A 100 year old man spent 30 years creating a video game? This I have to see.";
            wingersArray[7] = "Jeff Winger never learns!";
            wingersArray[8] = "I love scotch and myself. I tolerate Greendale.";
            wingersArray[9] = "These people are giving out free iPhones!";

            classicWinger = wingersArray[Math.ceil((Math.random() * wingersArray.length - 1))];


            headerTag = wingersHeader;
            headerText += "<" + headerTag + ">" + classicWinger + "</" + headerTag + ">  \n";
        }//End If Statement for creating headers.

        //Select a random speech from the array, then delete it from array.							
        //User can only get up to 10 paragraphs worth of speeches.
        if (wingerSpeeches != "") {

            var speechesArray = new Array();
            speechesArray[0] = "We're the only species on Earth that observes Shark Week.  Sharks don't even observe Shark Week, but we do, for the same reason I can pick up this pencil, tell you its name is Steve, and go like this!  And part of you dies, just a little bit, on the inside.  Because people can connect with anything.  We can sympathize with a pencil, we can forgive a shark, and we can give Ben Affleck an Academy Award for screenwriting....People can find the good in just about anything but themselves.  Look at me.  It's clear to all of you that I am awesome, but I can never admit that because that would make me an ass.  What I can do is see what makes Annie awesome.  She's driven.  We need driven people or the lights go out and the ice cream melts.  And Pierce.  We need guys like Pierce.  This guy has wisdom to offer....We should listen to him sometime.  We wouldn't regret it.  And Shirley.  Shirley has earned our respect.  Not as a wife, not as a mother, but as a woman.  And don't test her on that, because that thing about the jukebox was way too specific to be improvised.  And Troy.  Who cares if Troy thinks he's all that?  Maybe he is.  Do you think astronauts go to the Moon because they hate oxygen?  No, they're trying to impress their high school's prom king.  And Abed.  Abed's a shaman.  You ask him to pass the salt, he gives you a bowl of soup because you know what?  Soup is better.  Abed is better.  You are all better than you think you are.  You are just designed not to believe it when you hear it from yourself....I want you to look to the person to your left, sorry, look at the person next to you.  I want you to extend to that person the same compassion that you extend to sharks, pencils and Ben Affleck.  I want you to say to that person, 'I forgive you.'...You've just stopped being a study group, you've become something unstoppable.  I hereby pronounce you a community.";
            speechesArray[1] = "Gentlemen, I'm sure you suspected that Ms. Perry was pretty odd before the recess, but if you could have heard all the stuff she just told me in the shower you would realize she is all the way out of her damn mind.  She doesn't want to succeed because she doesn't think she can.  She goes out of her way to fail.  That's crazy!  But, do we really want to make it a crime to be crazy at Greendale?  I mean look at us, I mean, you two are arguing about status at a college that correspondence schools make fun of.  Dean, you want so bad for this place to be Ivy League that you are putting us at risk of electrocution!  Because everyone on this campus is nuts....If you want to rehabilitate your fellow inmate, you need to sentence her to staying here with us, because if crazy people can't be at Greendale where are we supposed to go?";
            speechesArray[2] = "It was a trick question.  The tool most important to humanity’s survival wasn’t any of the nine in the box....The most important tool is respect....And the reason I know respect is a tool is because it is clearly not a natural thing and we forget to use it all the time, and then we start competing with each other and exploiting each other and humiliating each other and controlling each other and we lose each other, and without each other, we’ll go extinct, and that’s a fact....That’s my answer professor.";
            speechesArray[3] = "It seems impossible.  Something impossible actually seems more likely.  What if a ghost to the pen?...For real?  Honestly, seriously, why not?  Why not just a ghost took the pen, and should we should have been listening to Troy from the beginning?  Guys, look in your hearts and answer this question honestly: what's more likely, that someone in this group doesn't belong in this group, or ghosts?  If we have to choose between turning on each other or pinning it on some specter with unfinished pen-related business, I'm sorry but, my money's on ghosts.";
            speechesArray[4] = "Look, we've known each other for almost two years now, and yeah, in that time I've given a lot of speeches, but they all have one thing in common: they're all different.  These drug runners aren't going to execute Pierce because he's racist, it's a locomotive that runs on us, and the only sharks that are in that water are the emotional ghosts that I like to call fear, anchovy, fear, and the dangers of ingesting mercury.  Because the real bugs aren't the ones in those beds and there's no such thing as a free caesar salad and even if there were The Cape may still find a second life on cable, and I'll tell you why: el corazon del agua es verdad, that water is a lie!  Harrison Ford is irradiating our testicles with microwave satellite transmissions!  So maybe we are caught in an endless cycle of screw-ups and hurt feelings, but I choose to believe it’s just the universe's way of molding us into some kind of supergroup....Yes, Troy, like the Traveling Wilburys of pain, prepared for any insane adventure life throws our way, and I don't about you, but I'm looking forward to every one of them.";
            speechesArray[5] = "Listen up, Colonel Cryptkeeper.  I could live a million years, and I could spend every minute of it doing important things, but at the end of it all, I would only have lived half a life if I had not raised a son.  This was gift that was handed to you, you squandered it, and the reason why you have so much hatred in your heart is because you're trying to fill a hole where your kid was supposed to go and now it's too late, now you're just stomping around, trying to prove you exist.  Well, mission accomplished.  But here's a question I'd like to pass on, from every son of every crap dad who ever lived: so what?  I'm done with you.  He's done with you.  The world is done with you.";
            speechesArray[6] = "Why was it so hard for all of us to grow a yam?  It’s just a stupid yam in a stupid jar.  We’re all fully grown adults failing a Kindergarten project....In all this time was assumed our yam was targeted, that someone had stomped its roots maliciously, but what if, what if our yam's roots were dead before they hit the ground?...Look at it, everyone look, smooshed without being stepped on, because it didn’t have to be stepped on, because it was boiled.  Someone has been pouring boiling water into our jars at night.  No one noticed because the water cooled off by morning.  Boiling water is the icicle stabbing of yam killing.  Hmm.  This yam isn’t boiled.  Vicki?";
            speechesArray[7] = "Your Honor, I have no closing statement because I’m throwing the case.  No, no, it’s OK, it's fine, don’t worry.  My client, Shirley Bennett, my friend of three years, she told me that it was OK, she said what I want was more important.  She’s right, right?  I mean, guys like me we’ll tell you there’s no right or wrong, there’s no real truths, and as long as well all believe that guys like me can never lose.  Because the truth is, I’m lying when I say there is no truth.  The truth is, the pathetically stupidly inconveniently obvious truth is, helping only ourselves is bad and helping each other is good.  Now, I just wanted to get out of here, pass Biology and be a lawyer again instead of helping Shirley: that was bad.  And my former colleague wanted so badly keep his rich client that he just asked me to roll over in exchange for my old job.  So, I guess we all walked in here pretty bad.  But now Shirley’s gone good, Shirley’s helping me.  It’s that easy.  You just stop thinking about what’s good for you and start thinking about what’s good for someone else, and you can change the whole game, with one move.  Now if you like this idea, you can make it true by doing something good for everyone here.  Throw this case out of court, it’s dumb.  That is all.";
            speechesArray[8] = "The dead can't have business, they can't want or think or do, it's what makes them dead.  It’s the living who choose to be haunted.  Cornelius was barely a dad, now he's nothing, and Pierce keeps staring into that void or he can turn around and say, ‘who gives a crap who my dad was?  I'm my own man now I—‘  Wow, pretty slick Britta, using ghosts to trick me into opening up.  Too bad it didn't work.";
            speechesArray[9] = "I'm sorry, you should take some credit for who I've become...so, let me tell you how I turned out, just so you're crystal clear on your impact.  I'm not well adjusted, and more often than not, I am barely keeping it together.  I'm constantly texting, and there's no one on the other end.  I'm just a grown man who can't even look his own friends in the eye for too long because I'm afraid that they'll see that I am broken, so you get credit for that....One time when I was in seventh grade I told everyone at school that I had appendicitis.  I wanted someone to worry about me, but when Beth Brennan asked to see the scar, I didn't want to get found out so I took mom's scissors and I made one.  It hurt like Hell.  But it was worth it because I got 17 cards and I still keep them in a box underneath my bed 22 years later because it proves that someone at some point cared about me.  You wanna see the scar?  So, you get credit for that too.  This is me.";

            for (var i = wingerSpeeches; i > 0; i--) {
                speechNumber = Math.ceil((Math.random() * speechesArray.length - 1));
                selectedSpeech = speechesArray[speechNumber];

                //for <p> tags
                if ($("#paragraph-tags").prop("checked")) {
                    speechesToDisplay += "<p>" + selectedSpeech + "</p> \n";
                } else {
                    speechesToDisplay += selectedSpeech + "\n";
                }

                //Remove the element from the array to avoid redundancy.					
                var speechToRemove = speechesArray[speechNumber];
                speechesArray.splice($.inArray(speechToRemove, speechesArray), 1);
            }

        }
        //Send (any) header and paragraphs to text box.
        $("#wingers").text(headerText + speechesToDisplay);

    });	//End Anonymous function					
}//End getWingers

//Haven't you humilated me enough?  At least I got some actual developers to look at this code.  I didn't take jQuery because no one told me it was being offer spring quarter at my COMMUNITY COLLEGE.