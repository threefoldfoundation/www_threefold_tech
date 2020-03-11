
from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    """
    JSX> cl = j.servers.threebot.local_start_zerobot(background=False)
    JSX> cl = j.clients.gedis.get("abc", port=8901, package_name="zerobot.packagemanager")
    JSX> cl.actors.package_manager.package_add(git_url="https://github.com/threefoldtech/www_threefold.tech/tree/development")
    """
    DOMAIN = "www2.threefold.tech"
    name = "www2_threefold_tech"
    def start(self):
        server = self.openresty
        server.configure()
        website_threefold_tech = server.websites.get(self.name)
        website_threefold_tech.domain = self.DOMAIN
        website_threefold_tech.port = 80
        website_threefold_tech.ssl = False

        websites = [server.get_from_port(80), server.get_from_port(443), website_threefold_tech]
        for website in websites:
            locations = website.locations.get(f"threebot_locations_{website.name}")

            website_location = locations.locations_static.new()
            website_location.name = f"{self.name}_location"
            website_location.path_url = "/" if website.domain == self.DOMAIN else f"/{self.name}"
            fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
            website_location.path_location = fullpath

            locations.configure()
            website.configure()
            website.save()
