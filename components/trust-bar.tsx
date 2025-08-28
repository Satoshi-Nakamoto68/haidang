export function TrustBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex items-center justify-center text-center">
        <span className="flex items-center gap-4 flex-wrap justify-center">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Registered in Hong Kong
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Head Office: Wan Chai
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Contact: info@haidangimex.com
          </span>
        </span>
      </div>
    </div>
  )
}
