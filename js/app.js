// app.js
//
$(function() {
    var model = {
        init: function () {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([
                    {
                        name: 'Cat 1',
                        clickCounter: 0,
                        imageSrc: 'data:image/jpeg;base64,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'
                    },
                    {
                        name: 'Tito',
                        clickCounter: 0,
                        imageSrc: 'data:image/jpeg;base64,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'
                    },
                    {
                        name: 'Tita',
                        clickCounter: 0,
                        imageSrc: 'data:image/jpeg;base64,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'
                    },
                    {
                        name: 'Cat 2',
                        clickCounter: 0,
                        imageSrc: 'data:image/jpeg;base64,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'
                    },
                    {
                        name: 'Cat 3',
                        clickCounter: 0,
                        imageSrc: 'data:image/jpeg;base64,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'
                    },
                ]);
            }
        },

        getAll: function () {
            return JSON.parse(localStorage.cats);
        },

        update: function (idx, item) {
            var data = this.getAll();
            data[idx] = item;
            localStorage.cats = JSON.stringify(data);
        }
    };

    var listView = {
        init: function () {
            this.catList = $('#cat-list');
            listView.render();
        },

        render: function () {
            octopus.getCats().forEach(function (cat, idx) {
                var link = $('<a class="list-group-item"/>').
                    text(cat.name).
                    bind('click', (function (catCopy, i) {
                        return function () {
                            octopus.setCurrent(i);
                        }
                    })(cat, idx));
                listView.catList.append(link);
            });
        }
    };

    var detailView = {
        init: function ()
        {
            this.detail = $('#cat-detail');
            this.render();
        },
        render: function () {
            var htmlStr = '',
                current = octopus.getCurrent();
            if (current) {
                htmlStr = '<img src="' + current.imageSrc + '" alt="' + current.name + '">' +
                    '<div class="caption">' +
                        '<h3>' + current.name + '</h3>' +
                        '<p>' + current.clickCounter + '</p>' +
                    '</div>';
            }

            this.detail.html(htmlStr);
            this.detail.find('img').click(function () {
                octopus.updateCurrent();
            });
        }
    };

    var adminView = {
        init: function () {
            this.form = $('form[name="catEditForm"]');
            this.trigger = $('#admin');
            this.cancel = $('#cancel');

            this.form.hide();
            this.trigger.show();

            this.trigger.click(function (event) {
                adminView.render();
            });

            this.cancel.click(function (event) {
                adminView.trigger.show();
                adminView.form.hide();
            });

            this.form.submit(function (event) {
                event.preventDefault();
                octopus.update({
                    name: adminView.form.find('input[name="name"]').val(),
                    clickCounter: adminView.form.find('input[name="clickCounter"]').val(),
                    imageSrc: adminView.form.find('input[name="imageSrc"]').val()
                });
                return false;
            });
        },

        render: function () {
            var current = octopus.getCurrent();

            this.form.find('input[name="name"]').val(current.name);
            this.form.find('input[name="clickCounter"]').val(current.clickCounter);
            this.form.find('input[name="imageSrc"]').val(current.imageSrc);

            if (this.trigger.is(':visible')) {
                this.trigger.hide();
                this.form.show();
            } else {
                this.trigger.show();
                this.form.hide();
            }
        }
    };

    var octopus = {
        current: null,

        getCats: function () {
            return model.getAll();
        },

        setCurrent: function (newCurr) {
            this.current = newCurr;
            detailView.render();
        },

        getCurrent: function () {
            return this.getCats()[this.current];
        },

        updateCurrent: function () {
            var current = this.getCurrent();

            current.clickCounter = (new Number(current.clickCounter)) + 1;

            model.update(this.current, current);

            detailView.render();
        },

        update: function (data) {
            console.log(data);
            model.update(this.current, data);
            detailView.render();
            adminView.render();
        },

        init: function () {
            this.current = 0;
            model.init();
            detailView.init();
            listView.init();
            adminView.init();
        }
    };

    octopus.init();

});