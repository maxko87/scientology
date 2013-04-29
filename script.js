$(document).ready(function() {

    images = [];
    for (i=1; i<=7; i++){
        var s = "cat" + i + ".jpg";
        images.push(s);
    }

    facts = [
        "L Ron Hubbard, the man who founded Scientology, was a science fiction writer before creating the religion.",
        "The Church of Scientology believe that an intergalactic overlord named Xenu, who presided over 78 planets, over 78 million years ago, brought people from other overpopulated planets to Earth. Followers of Scientology believe that Xenu named Earth, “The Prison Planet” (TeeGeeAk in Scientology circles) where he then bombed them with hydrogen bombs.",
        "Scientology viciously opposes the use of any psych drugs, but L Ron Hubbard was actually using Vistaril, a well-known psych drug, when he died.",
        "During the late 1960’s L Ron Hubbard and his Church of Scientology appeared to be keen to avoid controversy. To do this Hubbard took to the seas in a fleet of ships that he commanded. He named the fleet “Sea Org”, took a lot of crazy and wild recreational drugs, tortured the crew and had semi clad girls wait on him and satisfy his every need, demand and desire.",
        "If you decide that you wish to join the Church of Scientology you must sign a contract committing you to the church for one billion years.",
        "The leader of the Church of Scientology, David Miscavige, reportedly beat his aides.",
        "L Ron Hubbard once begged the Veterans Administration for psychiatric help.",
        "Those who follow Scientology refer to non-Scientologists as “wogs”. The term “wogs” is copyrighted by the Church of Scientology. It is no secret that L Ron Hubbard was a well-known racist.",
        "The Church of Scientology is classed as a corporation, not a church.",
        "L Ron Hubbard was a self-confessed serial masturbator. This he spoke about in his diaries stating the following: “I have a very bad masturbatory history. I was taught when I was 11 and, despite guilt, fear of insanity, etc. etc., I persisted.”",
        "In an attempt to frame a former member of the Church of Scientology forged bomb threats in the hope she would be convicted.",
        "The Church of Scientology offers various tests for various aliments one of which is a Stress Test. A randomised study of the Stress Test involved 3 individuals who all submitted diametrically opposed answers. The results all reflected negative results which required treatment. This means the test is weighted towards negativity regardless of a person’s answers.",
        "Members who advance past a certain level (in part by paying a specified amount in donations) are given secret information, such as that about Xenu, which they can’t admit to anyone else. They’re told that people could die if they found out this information too soon.",
        "The Church of Scientology runs a rehabilitation program for members who don’t measure up. The living quarters are said to be infested with vermin and the “rehabilitation” can take years to complete through menial, degrading labor. While there, members aren’t allowed to visit with spouses or family.",
        "During the 1970′s, the Church of Scientology conspired to position up to 5,000 agents inside over 100 government agencies in over 30 countries to improve the Church’s image by removing unfavorable files and information. The whole thing resulted in an FBI raid consisting of 156 agents. The raid lasted almost 24 hours and the case sent numerous high-ranking Scientologists, including L. Ron Hubbard’s wife, to jail. This event is still a sore point for Scientology.",
        "The story of human life on Earth started when Xenu, an alien, stacked a few billion frozen bodies around volcanoes, then blew them up using hydrogen bombs, creating a bunch of disembodied souls known as thetans.",
    ];

    refresh();

});

var refresh = function(){
    $('.image').attr('src', "static/" + images[Math.floor(Math.random() * images.length)]);

    var caption = facts[Math.floor(Math.random() * facts.length)];
    //$('#top_text').text(caption[0]);
    $('#bottom_text').text(caption);

}