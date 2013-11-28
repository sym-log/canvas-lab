for i in {0..999..1}
do


pngnq -n 256 "$i.png" && pngcrush "$i-nq8.png" "temp/$i.png"


done
